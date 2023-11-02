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


// import React from 'react';

// const Profile = () => {
//   return (
//     <div className='bg-red-400 h-screen flex justify-center items-center'>
//       <div className='container'>
//         <div className='w-full'>
//           <h3>Personal Information</h3>
//           <div>
//             <img src="" alt="Profile-image" />
//           </div>
//           <div>
//             <label htmlFor="" className='block'>Student ID:</label>
//             <input className='w-3/6' type="text" name="" value="N/A" disabled id="" />
//           </div>

//           <div>
//             <label htmlFor="" className='block'>Full name</label>
//             <input className='w-3/6' type="text" name="" value="Md Mehedi Hasan" disabled id="" />
//           </div>

//           <div>
//             <label htmlFor="" className='block'>Email Address</label>
//             <input className='w-3/6' type="text" name="" value="mehedi@gmail.com" disabled id="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
