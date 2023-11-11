

import React, { useState } from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useClassRoutineMutation } from '../rtkq/services/userAuthApi';
import { Outlet, Link } from "react-router-dom";
import ShowClassRoutine from './showClassRoutine';

const ClassRoutine = () => {
  const [teacherAndSubject, setTeacherAndSubject] = useState([{ teacherData: '', subjectData: '' }]);
  const [classDate, setClassDate] = useState('');
  const [error, setError] = useState(false);

  const [formUser, { isLoading }] = useClassRoutineMutation();

  const addTeacherAndSubjectInput = () => {
    setTeacherAndSubject([...teacherAndSubject, { teacherData: '', subjectData: '' }]);
  };

  const handleChange = (event, index, field) => {
    const { name, value } = event.target;

    if (name === 'classDay') {
      setClassDate(value);
    } else {
      const updatedTeacherAndSubject = [...teacherAndSubject];
      updatedTeacherAndSubject[index][field] = value;
      setTeacherAndSubject(updatedTeacherAndSubject);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      classDay: classDate,
      teacherName: teacherAndSubject.map((item) => item.teacherData),
      subjectData: teacherAndSubject.map((item) => item.subjectData),
    };

    console.log('User data:', formData);

    try {
      const res = await formUser(formData);

      if (res.error) {
        console.log('Login error:', res.error);
        setError(true);
      }

      if (res.data) {
        console.log('Login successful:', res.data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className='text-center text-3xl p-5'>Make Class Routine</div>
      <div className='h-auto'>
        <div className='flex flex-wrap justify-center '>
          <input
            className='w-48 border border-gray-400 m-2'
            type="text"
            name="classDay"
            placeholder="Day"
            value={classDate}
            onChange={(event) => handleChange(event, 0, 'day')}
            required
          />

          {teacherAndSubject.map((input, index) => (
            <div key={index}>
              <input
                className='w-48 border border-gray-400 m-2'
                type="text"
                name="teacherName"
                placeholder="Teacher"
                value={input.teacherData}
                onChange={(event) => handleChange(event, index, 'teacherData')}
                required
              />
              <input
                className='w-48 border border-gray-400 m-2'
                type="text"
                name="subjectData"
                placeholder="Subject & Time"
                value={input.subjectData}
                onChange={(event) => handleChange(event, index, 'subjectData')}
                required
              />
            </div>
          ))}

          <button className='w-48' onClick={addTeacherAndSubjectInput}>
            <BsPlusCircleDotted className='w-32 h-10' />
          </button>
        </div>
        <form onSubmit={handleSubmit} className=''>
          <button type="submit" className='p-3 px-11 uppercase mt-4 rounded-md text-white bg-blue-700 m-auto flex'>
            Submit
          </button>
        </form>

        <div className='pt-20'>

<ShowClassRoutine/>

</div>
      
      </div>


    </>
  );
};

export default ClassRoutine;
