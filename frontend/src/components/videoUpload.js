import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useVideoUpoadMutation } from '../rtkq/services/userAuthApi';
import { AiOutlineCloudUpload} from 'react-icons/ai';
import { BsCloudUploadFill} from 'react-icons/bs';

const VideoUploader = () => {
    const [formData, setFormData] = useState({
       playlist: "",
       title:"",
       file:"",
      });
    
      const [error, setError] = useState(false);
      const [videoUpload, { isLoading }] = useVideoUpoadMutation();

      const [fileUploaded, setFileUploaded] = useState(false);

      const [submited, setSubmited] = useState(false)
    
     

    
    const handleInputChange = (event) => {
        const { name, value, type, files } = event.target;
        let fileData = value;
      
        if (type === 'file' && files.length > 0) {
          // Handle the file input
          fileData = files[0];
          const hasFile = event.target.files.length > 0;
          setFileUploaded(hasFile);
        }
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: fileData,
        }));
      }
      
    
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        
        try {
          const res = await videoUpload(formData);
    
          if (res.error) {
            console.log("Login error:", res.error);
            setError(true); // Show an error message
          }
    
          if (res.data) {
            console.log("Login successful:", res.data);
        
            setSubmited(res.data)
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
    
      }
    

    return (
        <>
        <div className='flex justify-center items-center h-screen'>
        
        <form action="" onSubmit={handleSubmit}  encType="multipart/form-data">
        <h3 className='text-center pb-5 text-3xl font-semibold'>Upoad The Video</h3>
            <input type="text" name='playlist' placeholder='PlayList Name' onChange={handleInputChange} className='border border-gray-500' />
            <input type="text" name='title' placeholder='Title Name' onChange={handleInputChange} className='border border-gray-500' />

        <div>
      <div className='flex justify-center pb-6 relative'>
        <label
          htmlFor="upload-photo"
          className="flex items-center justify-center border border-gray-500 w-24 h-24 rounded-full"
        >
          {fileUploaded ? <BsCloudUploadFill className='text-4xl' /> : <AiOutlineCloudUpload className='text-4xl' />}
        </label>
      </div>
      <input
        type="file"
        name='file'
        onChange={handleInputChange}
        id='upload-photo'
        className='border border-gray-500 opacity-0 absolute'
      />
       </div>
       <div className="bg-blue-400 w-28 p-2 px-8 m-auto rounded-md">
  <button type="submit" className={submited ? "px-2" : "relative"}>
    {submited ? "Done" : "Upload"}
  </button>
</div>

   

        </form>
        </div>
        </>
    );
};

export default VideoUploader;
