import React, { useEffect, useState } from 'react'
import css from '../css/profile.css'
import profile from '../image/profile.png'
import { useGetLoggedUserQuery } from '../rtkq/services/userAuthApi'
import { getToken } from '../rtkq/services/localStorageService'


const Profile = () => {

const {access_token} = getToken()
// console.log(access_token);
const {data, isSuccess} = useGetLoggedUserQuery(access_token)
console.log(data);
const [userData, setUserData] = useState({
  role: "",
  email:"",
  full_name:"",
})

useEffect(()=>{
  if(data && isSuccess){
    setUserData({
      role: data.role,
      full_name: `${data.first_name} ${data.last_name}`,
      email: data.email,
    })
  }
},[data,isSuccess])

  return (
    <>
        <div className='main-container'>
        <div className='profile-container'>
            <div className='inner-container '>
            <h3 className='person'>Personal Information</h3>
            <div className='img-div'>
            <img className='frofile-img' src={profile} alt="Profile-image" />
            </div>
            <div>
            <label htmlFor="" className='block'>Role type:</label>
            <input className='' type="text" name="" value={userData.role} disabled id="" />
            </div>

            <div>
            <label htmlFor="" className='block'>Full name</label>
            <input className='' type="text" name="" value={userData.full_name} disabled id="" />
            </div>
            
            <div>
            <label htmlFor="" className='block'>Email Address</label>
            <input className='' type="text" name="" value={userData.email} disabled id="" />
            </div>
            
            </div>

        </div>
        </div>
    </>
  )
}

export default Profile;

