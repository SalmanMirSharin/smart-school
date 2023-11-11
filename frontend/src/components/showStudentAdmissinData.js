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
