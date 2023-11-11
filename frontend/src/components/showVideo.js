
import React, { useEffect, useState, useRef } from "react";
import { useQueryClient } from 'react-query';
import { useVideoGetQuery, useVideoDeleteMutation } from "../rtkq//services/userAuthApi";
import { useGetLoggedUserQuery } from "../rtkq/services/userAuthApi";
import { getToken } from "../rtkq/services/localStorageService";



const ShowVideo = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError } = useVideoGetQuery();
  const [playlists, setPlaylists] = useState({});
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  const [deleteVideoMutation] = useVideoDeleteMutation();


  
  const { access_token } = getToken();

  const { data: loggedUserData, isSuccess: loggedUserSuccess } =
    useGetLoggedUserQuery(access_token);

    const [userDataLog, setUserDataLog] = useState({
      role: "",
    });
  
    useEffect(() => {
      if (loggedUserData && loggedUserSuccess) {
        setUserDataLog({
          role: loggedUserData.role,
        });
      }
    }, [loggedUserData, loggedUserSuccess]);
  




  useEffect(() => {
    if (data) {
      const organizedPlaylists = {};
      data.forEach((video) => {
        if (!organizedPlaylists[video.playlist]) {
          organizedPlaylists[video.playlist] = [];
        }
        organizedPlaylists[video.playlist].push({
          id: video.id,
          title: video.title,
          file: video.file,
        });
      });
      setPlaylists(organizedPlaylists);
    }
  }, [data, isSuccess]);


const handlePlaylistClick = (playlistName) => {
    setSelectedPlaylist((prevPlaylist) => (prevPlaylist === playlistName ? null : playlistName));

    // Play the current video when toggling playlists
    if (selectedVideo && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((error) => console.error("Error playing video:", error));
      }
    }
  };


  const handleTitleClick = (video) => {
    setSelectedVideo(video);

    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.load();
      videoRef.current.play().catch((error) => console.error("Error playing video:", error));
    }
  };

  const handleDeleteClick = async (videoId) => {
    try {
      await deleteVideoMutation(videoId);
      queryClient.invalidateQueries('videoGet');
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.currentTime = currentTime;
      if (isVideoPlaying) {
        videoRef.current.play().catch((error) => console.error("Error playing video:", error));
      }
    }
  }, [selectedVideo, currentTime, isVideoPlaying]);

  return (
    <>
      {isSuccess && (
        <div className="h-screen">
        {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
        <div className="flex flex-row p-10">
     
          <div className="w-4/12 m-2">
            {Object.keys(playlists).map((playlistName) => (
              <div key={playlistName} className="">
                <h2 className="bg-blue-500 mb-2 p-3 uppercase font-bold rounded-md text-center"
                  style={{
                    color: selectedPlaylist === playlistName ? "#581845" : "black",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlaylistClick(playlistName)}
                >
                  {playlistName}
                </h2>
                {selectedPlaylist === playlistName && (
          
                  playlists[playlistName].map((video) => (
                    <div key={video.id} className="bg-blue-300 -mt-2 mb-2 p-2">
                      <h3 className="bg-blue-400 font-medium p-1 px-2 rounded-sm"
                        style={{
                          color: selectedVideo === video ? "#900C3F" : "black",
                          // textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        onClick={() => handleTitleClick(video)}
                      >
                        {video.title}
                      </h3>
                      {
                        userDataLog.role.toLowerCase() === "admin" ?
                        <button className="bg-red-600 p-1 px-2 rounded-md text-white mt-1" onClick={() => handleDeleteClick(video.id)}>Delete</button>
                        : ""
                      }
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>

          <div className="w-8/12">
            {selectedVideo && (
              <video
                width="620"
                height="400"
                controls
                ref={videoRef}
                // autoPlay={isVideoPlaying} 
                autoPlay
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src={selectedVideo.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        </div>
      )}
      {isError && <p>Error loading video</p>}
    </>
  );
};

export default ShowVideo;

