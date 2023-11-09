

// import React, { useEffect, useState } from 'react'
// import { useClassRoutineGetQuery } from '../rtkq/services/userAuthApi'
// import { setupListeners } from '@reduxjs/toolkit/query'

// const ShowClassRoutine = () => {

// const {data, isSuccess} = useClassRoutineGetQuery()

// const [userData, setUserData] = useState({
//   classDay: "",
//   teacherName:"",
//   subjectName:"",
// })


// useEffect(()=>{
//   if(data && isSuccess){
//     setUserData({
//       classDay: data.map((item)=>item.classDay),
//       teacherName: data.map((item)=>item.teacherName),
//       subjectName: data.map((item)=>item.subjectData),
//     })
//   }
// },[data,isSuccess])



// let combinedData = [];

// if (Array.isArray(userData.teacherName) && Array.isArray(userData.subjectName)) {
//   let maxLength = Math.max(userData.teacherName.length, userData.subjectName.length);

//   for (let i = 0; i < maxLength; i++) {
//     let teacher = userData.teacherName[i] || '';
//     const subject = userData.subjectName[i] || '';
//     combinedData.push({ teacher, subject });
//     // console.log(typeof(teacher));
//   }
// }

//   return (
//     <>
//         <h1 className='text-center p-6 text-3xl font-semibold'>Your Class Routine</h1>

// <div className='h-screen'>

// {combinedData.map((item, index) => (
  
//   <div key={index} className="mb-4 ">
//     <table className='border-collapse w-3/4 text-center border border-blue-950 m-auto'>
//       <tr className=''>
//         <th className='p-5 border border-slate-400' rowspan="2" style={{ verticalAlign: 'middle' }}>
//           {userData.classDay[index]}
//         </th>
//         {item.teacher.split(',').map((teacherItem, teacherIndex) => (
//           <td key={teacherIndex} className='p-5 border border-slate-400'>{teacherItem}</td>
//         ))}
//       </tr>
//       <tr className=''>
//         {item.subject.split(',').map((subjectItem, subjectIndex) => (
//           <td key={subjectIndex} className='p-5 border border-slate-400'>{subjectItem}</td>
//         ))}
//       </tr>
//     </table>
//   </div>
  
// ))} 

// </div>


//     </>
//   )
// }

// export default ShowClassRoutine;


import React, { useEffect, useState } from 'react';
import { useClassRoutineGetQuery } from '../rtkq/services/userAuthApi';
import { useGetLoggedUserQuery } from '../rtkq/services/userAuthApi'
import { getToken } from "../rtkq/services/localStorageService";

const ShowClassRoutine = () => {
  const { data, isSuccess } = useClassRoutineGetQuery();

  const { access_token } = getToken();

  const {data: loggedUserData, isSuccess: loggedUserSuccess } = useGetLoggedUserQuery(access_token)
  // console.log("Routine:", loggedUserData);

  // login:


  const [userDataLog, setUserDataLog] = useState({
    role: "",
  })
  
  useEffect(()=>{
    if(loggedUserData && loggedUserSuccess){
      setUserDataLog({
        role: loggedUserData.role,

      })
    }
  },[loggedUserData,loggedUserSuccess])

  // console.log("want to role:",loggedUserData.role);

  // login end:



  const [userData, setUserData] = useState({
    classDay: '',
    teacherName: '',
    subjectName: '',
  });

  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        classDay: data.map((item) => item.classDay),
        teacherName: data.map((item) => item.teacherName),
        subjectName: data.map((item) => item.subjectData),
      });
    }
  }, [data, isSuccess]);

  let combinedData = [];

  if (Array.isArray(userData.teacherName) && Array.isArray(userData.subjectName)) {
    let maxLength = Math.max(userData.teacherName.length, userData.subjectName.length);

    for (let i = 0; i < maxLength; i++) {
      let teacher = userData.teacherName[i] || '';
      const subject = userData.subjectName[i] || '';
      combinedData.push({ teacher, subject });
    }
  }

  const handleDayClick = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  return (
    <>
      <h1 className='text-center p-6 text-3xl font-semibold'>Your Class Routine</h1>

      <div className='h-screen'>

      {userDataLog.role.toLowerCase()==='admin'?

      (combinedData.map((item, index) => (
          <div key={index} className='mb-4'>
            <h2
              onClick={() => handleDayClick(index)}
              style={{ cursor: 'pointer', textDecoration: selectedDay === index ? 'underline' : 'none' }}
              className='mt-2 bg-slate-300 text-center'
            >
              {userData.classDay[index]}
            </h2>

            {selectedDay === index && (
              <div className='mt-4'>
                <table className='border-collapse w-3/4 text-center border border-blue-950 m-auto'>
                  <tr className=''>
                    <th className='p-5 border border-slate-400' rowSpan="2" style={{ verticalAlign: 'middle' }}>
                      {userData.classDay[index]}
                    </th>
                    {item.teacher.split(',').map((teacherItem, teacherIndex) => (
                      <td key={teacherIndex} className='p-5 border border-slate-400'>
                        {teacherItem}
                      </td>
                    ))}
                  </tr>
                  <tr className=''>
                    {item.subject.split(',').map((subjectItem, subjectIndex) => (
                      <td key={subjectIndex} className='p-5 border border-slate-400'>
                        {subjectItem}
                      </td>
                    ))}
                  </tr>
                </table>
              </div>
            )}
          </div>
        ))):


      (combinedData.map((item, index) => (
  
     <div key={index} className="mb-4 ">
       <table className='border-collapse w-3/4 text-center border border-blue-950 m-auto'>
         <tr className=''>
           <th className='p-5 border border-slate-400' rowspan="2" style={{ verticalAlign: 'middle' }}>
             {userData.classDay[index]}
           </th>
           {item.teacher.split(',').map((teacherItem, teacherIndex) => (
             <td key={teacherIndex} className='p-5 border border-slate-400'>{teacherItem}</td>
           ))}
         </tr>
         <tr className=''>
           {item.subject.split(',').map((subjectItem, subjectIndex) => (
             <td key={subjectIndex} className='p-5 border border-slate-400'>{subjectItem}</td>
           ))}
         </tr>
       </table>
     </div>
    
 )))
      
      
      }
        
      </div>
    </>
  );
};

export default ShowClassRoutine;
