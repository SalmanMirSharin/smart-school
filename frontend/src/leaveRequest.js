// import React, { Component } from 'react';

// class LeaveRequestForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: '',
//         startDate: '',
//         endDate: '',
//         reason: ''
//       };
//     }
  
//     handleChange = (e) => {
//       const { name, value } = e.target;
//       this.setState({ [name]: value });
//     }
  
//     handleSubmit = (e) => {
//       e.preventDefault();
//       // Handle form submission here, e.g., send data to a server or update state.
//       console.log('Leave request submitted:', this.state);
//       // You can add your own logic to handle the request submission.
//     }
  
//     render() {
//       return (
//         <div className='bg-slate-600'>
//           <h2>Leave Request Form</h2>
//           <form className='bg-slate-700  w-screen flex flex-col justify-center items-center h-screen' onSubmit={this.handleSubmit}>
//             <div className='w-3/4 mt-5'>
//               <label className='w-full block text-gray-300'>Name:</label>
//               <input className='w-4/5 h-14 border border-cyan-400 '
//                 type="text"
//                 name="name"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//                 required
//               />
//             </div>
//             <div className='w-3/4 mt-5'>
//               <label className='w-full block text-gray-300'>Start Date:</label> 
//               <input className='w-4/5 h-14 border border-cyan-400'
//                 type="date"
//                 name="startDate"
//                 value={this.state.startDate}
//                 onChange={this.handleChange}
//                 required
//               />
//             </div>
//             <div className='w-3/4 mt-5'>
//               <label className='w-full block text-gray-300'>End Date:</label>
//               <input  className='w-4/5 h-14 border border-cyan-400 '
//                 type="date"
//                 name="endDate"
//                 value={this.state.endDate}
//                 onChange={this.handleChange}
//                 required
//               />
//             </div>
//             <div className='w-3/4 mt-5'>
//               <label className='w-full block text-gray-300'>Reason:</label>
//               <textarea className='w-4/5 h-14 border border-cyan-400 '
//                 name="reason"
//                 value={this.state.reason}
//                 onChange={this.handleChange}
//                 required
//               />
//             </div>
//             <div className='flex items-start'>
//             <button className='bg-orange-400 w-20 h-10 ' type="submit">Submit</button>

//             </div>
//           </form>
//         </div>
//         // <div className='w-screen flex flex-col justify-center items-center h-screen'>
//         //     <h1 className=''>Hello world!</h1>
//         // </div>
//       );
//     }
//   }
  
//   export default LeaveRequestForm;



import React, { Component } from 'react';

class LeaveRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      reason: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or update state.
    console.log('Leave request submitted:', this.state);
    // You can add your own logic to handle the request submission.
  }

  render() {
    return (
      <div className='bg-gray-100 w-full h-screen'>
       
        
        <form className=' space-y-7 max-w-3xl px-10' onSubmit={this.handleSubmit}>

        <div className=''>
            <h2 className='text-3xl pt-10 font-semibold'>Leave Request Form</h2>
            </div>
           
          <div className=''>
            <label>Name:</label>
            <input className='border border-gray-400 block py-2 px-4  w-full rounded focus:outline-none focus:border-teal-500'
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className=''>
            <label>Class/Depertment</label>
            <input className='border border-gray-400 block py-2 px-4  w-full rounded focus:outline-none focus:border-teal-500'
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input className='border border-gray-400 block py-2 px-4  w-full rounded focus:outline-none focus:border-teal-500'
              type="date"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>End Date:</label>
            <input className='border border-gray-400 block py-2 px-4  w-full rounded focus:outline-none focus:border-teal-500'
              type="date"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Reason:</label>
            <textarea className='border border-gray-400 resize-none h-28 block py-2 px-4  w-full rounded focus:outline-none focus:border-teal-500'
              name="reason"
              value={this.state.reason}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='mt-4'>
          <button className='bg-cyan-600 w-fit px-4 py-2 rounded' type="submit">Submit</button>

          </div>
        </form>
      </div>
    );
  }
}

export default LeaveRequestForm;
