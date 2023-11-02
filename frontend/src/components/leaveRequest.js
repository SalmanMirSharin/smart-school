
import React, { Component } from 'react';
import styles from "../../src/index.css"


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

export  { LeaveRequestForm }
