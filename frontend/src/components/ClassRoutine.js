
import React, { useState } from 'react';
// import { AiFillPlusCircle,AiOutlinePlus } from 'react-icons/ai';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useClassRoutineMutation } from '../rtkq/services/userAuthApi';

const Box = () => {
  const [generatedMessages, setGeneratedMessages] = useState([]);
  const [formData, setFormData] = useState([{ data: '' }]);
  const [classDate, setClassDate] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [error, setError] = useState(false);

  const [formUser, { isLoading }] = useClassRoutineMutation();

  const addInput = () => {
    const newInput = { data: '' };
    setFormData([...formData, newInput]);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    if (name === 'classDay') {
      setClassDate(value);
    } else if (name === 'teacherName') {
      setTeacherName(value);
    } else {
      const updatedFormData = [...formData];
      updatedFormData[index].data = value;
      setFormData(updatedFormData);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = {
      classDay: classDate,
      teacherName: teacherName,
      subjectData: formData.map(item => item.data),
      // other fields as needed
    };

    console.log('User data:', formdata);

    try {
      const res = await formUser(formdata);

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
      <div className='h-screen'>
      <div className='flex flex-wrap justify-center'>
        {generatedMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}

        <input className='w-48 border border-gray-400 m-2'
          type="text"
          name="classDay"
          placeholder="Day"
          value={classDate}
          onChange={handleChange}
          required
        />
        <input className='w-48 border border-gray-400 m-2'
          type="text"
          name="teacherName"
          placeholder="Teacher Name"
          value={teacherName}
          onChange={handleChange}
          required
        />

        {formData.map((input, index) => (
          <div key={index}>
            <input className='w-48 border border-gray-400 m-2'
              type="text"
              name="subjectData"
              placeholder="Subject & Time"
              value={input.data}
              onChange={(event) => handleChange(event, index)}
              required
            />
          </div>
        ))}
        <button
          className='w-48'
          onClick={() => addInput()}
        >
          <BsPlusCircleDotted className='w-32 h-10'  />
        </button>
      </div>
      <form onSubmit={handleSubmit} className=''>
        <button type="submit" className='p-3 px-11 uppercase mt-4 rounded-md text-white bg-blue-700 m-auto flex'>Submit</button>
      </form>
      </div>
    </>
  );
};

export default Box;
