import React, { useState } from "react";
import { useStudentAdmissionGetQuery } from "../rtkq/services/userAuthApi";

const ShowStudentAdmissinData = () => {
  const { data, isLoading, isError } = useStudentAdmissionGetQuery();
  const [selectedStudent, setSelectedStudent] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  const handleStudentClick = (studentId) => {
    setSelectedStudent(studentId);
  };

  return (
    <>
      <div className="mb-96">
        {data.map((item) => (
          <div key={item.id} className="">
            <h2
              onClick={() => handleStudentClick(item.id)}
              style={{ cursor: "pointer" }}
              className="mt-2"
            >
              <span className="text-gray-800 font-semibold text-2xl ml-5">
                {item.id}.
              </span>
              <span className="text-gray-800 font-semibold text-2xl mr-4">
                {item.studentFirstName} {item.studentLastName} -
              </span>
              <span className="text-gray-800 font-semibold text-2xl ">
                {item.studentEmail}
              </span>
            </h2>

            {selectedStudent === item.id && (
              <table className="border-collapse border border-slate-400 w-2/4 mb-5 m-auto">
                {/* <thead>
                <tr>
                  <th className="border border-slate-300">Key</th>
                  <th className="border border-slate-300">Value</th>
                </tr>
              </thead> */}
                <tbody>
                  {Object.entries(item).map(([key, value]) => (
                    <tr key={key}>
                      <td className="border border-slate-300 text-lg p-2 font-medium">
                        {key}
                      </td>
                      {/* <td className="border border-slate-300">{value}</td> */}

                      {key === "studentImage" || key === "studentSignature" ? (
                        <td className="border border-slate-300">
                          <img
                            className="w-20 border border-gray-400 m-auto"
                            src={value}
                            alt=""
                          />
                        </td>
                      ) : (
                        <td className="border border-slate-300 text-center text-lg">
                          {value}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowStudentAdmissinData;




// import React, { useState } from "react";
// import {
//   useStudentAdmissionGetQuery,
//   useDeleteStudentMutation, // Add this import for delete mutation
//   useCreateStudentMutation, // Add this import for create student mutation
// } from "../rtkq/services/userAuthApi";

// const ShowStudentAdmissinData = () => {
//   const { data, isLoading, isError } = useStudentAdmissionGetQuery();
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   // Mutation hooks for delete and create student
//   const deleteStudentMutation = useDeleteStudentMutation();
//   const createStudentMutation = useCreateStudentMutation();

//   const handleStudentClick = (studentId) => {
//     setSelectedStudent(studentId);
//   };

//   const handleDelete = async () => {
//     try {
//       // Assuming your API expects student ID as an argument for deletion
//       await deleteStudentMutation.mutateAsync(selectedStudent);
//       setSelectedStudent(null);
//     } catch (error) {
//       console.error("Error deleting student:", error);
//     }
//   };

//   const handleApprove = async () => {
//     try {
//       const selectedStudentData = data.find((item) => item.id === selectedStudent);

//       // Assuming your API expects student data for creating a new account
//       await createStudentMutation.mutateAsync({
//         firstName: selectedStudentData.studentFirstName,
//         lastName: selectedStudentData.studentLastName,
//         email: selectedStudentData.studentEmail,
//         role: "student",
//         password: "12345678",
//       });

//       setSelectedStudent(null);
//     } catch (error) {
//       console.error("Error approving student:", error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data.</div>;
//   }

//   return (
//     <>
//       <div className="mb-96">
//         {data.map((item) => (
//           <div key={item.id} className="">
//             <h2
//               onClick={() => handleStudentClick(item.id)}
//               style={{ cursor: "pointer" }}
//               className="mt-2"
//             >
//               {/* ... (existing code) ... */}
//             </h2>

//             {selectedStudent === item.id && (
//               <>
//                 <div className="flex justify-center mt-4">
//                   <button
//                     onClick={handleDelete}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={handleApprove}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Approve
//                   </button>
//                 </div>

//                 <table className="border-collapse border border-slate-400 w-2/4 mb-5 m-auto">
//                   {/* ... (existing code) ... */}


//                   <tbody>
//                   {Object.entries(item).map(([key, value]) => (
//                     <tr key={key}>
//                       <td className="border border-slate-300 text-lg p-2 font-medium">
//                         {key}
//                       </td>
//                       {/* <td className="border border-slate-300">{value}</td> */}

//                       {key === "studentImage" || key === "studentSignature" ? (
//                         <td className="border border-slate-300">
//                           <img
//                             className="w-20 border border-gray-400 m-auto"
//                             src={value}
//                             alt=""
//                           />
//                         </td>
//                       ) : (
//                         <td className="border border-slate-300 text-center text-lg">
//                           {value}
//                         </td>
//                       )}
//                     </tr>
//                   ))}
//                 </tbody>
                  
//                 </table>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ShowStudentAdmissinData;





// import React, { useState } from "react";
// import { useStudentAdmissionGetQuery } from "../rtkq/services/userAuthApi";

// const ShowStudentAdmissinData = () => {
//   const { data, isLoading, isError } = useStudentAdmissionGetQuery();
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleStudentClick = (studentId) => {
//     setSelectedStudent(studentId);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data.</div>;
//   }

//   return (
//     <>
//       <div className="mb-96">
//         {data.map((item) => (
//           <div key={item.id} className="">
//             <h2
//               onClick={() => handleStudentClick(item.id)}
//               style={{ cursor: "pointer" }}
//               className="mt-2"
//             >
//               {item.studentFirstName} {item.studentLastName}
//             </h2>

//             {selectedStudent === item.id && (
//               <div>
//                 <table className="border-collapse border border-slate-400 w-2/4 mb-5 m-auto">
//                   <tbody>
//                     {Object.entries(item).map(([key, value]) => (
//                       <tr key={key}>
//                         <td className="border border-slate-300 text-lg p-2 font-medium">
//                           {key}
//                         </td>
//                         {key === "studentImage" || key === "studentSignature" ? (
//                           <td className="border border-slate-300">
//                             <img
//                               className="w-20 border border-gray-400 m-auto"
//                               src={value}
//                               alt=""
//                             />
//                           </td>
//                         ) : (
//                           <td className="border border-slate-300 text-center text-lg">
//                             {value}
//                           </td>
//                         )}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ShowStudentAdmissinData;





// import React, { useState } from "react";
// import {
//   useStudentAdmissionGetQuery,
//   useCreateStudentMutation,
//   useDeleteStudentMutation,
// } from "../rtkq/services/userAuthApi";


// const ShowStudentAdmissinData = () => {
//   const { data, isLoading, isError } = useStudentAdmissionGetQuery();
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [deleteStudentMutation] = useDeleteStudentMutation();
//   const createStudentMutation = useCreateStudentMutation();

//   const handleStudentClick = (studentId) => {
//     setSelectedStudent(studentId);
//   };

//   // const handleDelete = async (id) => {
//   //   try {
//   //     // await deleteStudentMutation.mutateAsync(selectedStudent);
//   //     await deleteStudentMutation.mutate(id);
//   //     // setSelectedStudent(null);
//   //   } catch (error) {
//   //     console.error("Error deleting student:", error);
//   //   }
//   // };

//   const handleDelete = async (id) => {
//     try {
//       await deleteStudentMutation.mutate(id);
//       setSelectedStudent(null);
//     } catch (error) {
//       console.error("Error deleting student:", error);
//     }
//   };
  


//   const handleApprove = async () => {
//     try {
//       const selectedStudentData = data.find((item) => item.id === selectedStudent);

//       const formData = {
//         // Include the necessary fields for creating a student
//         firstName: selectedStudentData.studentFirstName,
//         lastName: selectedStudentData.studentLastName,
//         email: selectedStudentData.studentEmail,
//         // ... other fields

//         // If you have additional fields, you can add them here
//       };

//       // Assuming createStudentMutation accepts formData as an argument
//       await createStudentMutation.mutate(formData);

//       setSelectedStudent(null);
//     } catch (error) {
//       console.error("Error approving student:", error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data.</div>;
//   }

//   return (
//     <>
//       <div className="mb-96">
//         {data.map((item) => (
//           <div key={item.id} className="">
//             <h2
//               onClick={() => handleStudentClick(item.id)}
//               style={{ cursor: "pointer" }}
//               className="mt-2"
//             >
//               {item.studentFirstName} {item.studentLastName}
//             </h2>

//             {selectedStudent === item.id && (
//               <div>
//                 <div className="flex justify-center mt-4">
//                   <button
//                     onClick={()=>handleDelete(item.id)}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={handleApprove}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Approve
//                   </button>
//                 </div>

//                 <table className="border-collapse border border-slate-400 w-2/4 mb-5 m-auto">
//                   <tbody>
//                     {Object.entries(item).map(([key, value]) => (
//                       <tr key={key}>
//                         <td className="border border-slate-300 text-lg p-2 font-medium">
//                           {key}
//                         </td>
//                         {key === "studentImage" || key === "studentSignature" ? (
//                           <td className="border border-slate-300">
//                             <img
//                               className="w-20 border border-gray-400 m-auto"
//                               src={value}
//                               alt=""
//                             />
//                           </td>
//                         ) : (
//                           <td className="border border-slate-300 text-center text-lg">
//                             {value}
//                           </td>
//                         )}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ShowStudentAdmissinData;

