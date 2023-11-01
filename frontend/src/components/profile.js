import React from 'react'
import css from '../css/profile.css'
import profile from '../image/profile.png'
const Profile = () => {
  return (
    <>
        <div className='main-container'>
        <div className='container'>
            <div className='inner-container '>
            <h3 className=''>Personal Information</h3>
            <div className='img-div'>
            <img className='frofile-img' src={profile} alt="Profile-image" />
            </div>
            <div>
            <label htmlFor="" className='block'>Student ID:</label>
            <input className='' type="text" name="" value="N/A" disabled id="" />
            </div>

            <div>
            <label htmlFor="" className='block'>Full name</label>
            <input className='' type="text" name="" value="Md Mehedi Hasan" disabled id="" />
            </div>
            
            <div>
            <label htmlFor="" className='block'>Email Address</label>
            <input className='' type="text" name="" value="mehedi@gmail.com" disabled id="" />
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
