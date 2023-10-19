import React from 'react'
import css from '../css/home.css'
// import readbook from '../image/readingbook.jpg'
import education from '../image/education.png'
import adamCaulton from '../image/adam-caulton.jpg'
import alexander_bown from '../image/alexander_bown_cropped.jpeg'
import baccelli from '../image/baccelli.jpg'
import bobzien from '../image/bobzien.jpg'
import catharine_abell from '../image/catharine_abell.png'
import lindsayjudson from '../image/lindsayjudson.jpg'
import luca_castagnoli from '../image/luca_castagnoli.jpg'



function Home() {
  return (
   <>
     <div className='home-page flex justify-between items-center'>
       
          <div className='w-3/6 p-10 '>
            <h3 className='text-5xl -mt-37 font-semibold text-white'>Welcome Here and Let's go to fullfill your goal</h3>
            <p className='mt-7 text-xl font-semibold text-gray-400'>Education our Aim for our better life</p>
            <p className='mt-9 text-gray-400'>What is the famous definition of education?
Definition of Education by Different Authors – ExamPlanning
Education is defined as a learning process for the individual to attain knowledge and understanding of the higher specific objects and specific. The knowledge gained formally resulting individual has a pattern of thought and behavior in accordance with the education they have gained. </p>
          </div>
          <div className='w-5/6'>
            <img className='w-4/5 p-7	' src={education} alt="" />
          </div>
        </div>




    {/* STatistics part */}


    <div className='w-8/12 h-3/5 bg-white m-auto -mt-20 pb-32'>
        <div className=''>
        <h1 className='flex justify-center pt-32 text-3xl uppercase font-semibold'>statistics</h1>
      <p className='flex justify-center pt-5 font-semibold'>At a Glance Our Organization
</p>
        </div>

      <div className='flex justify-between p-12 mt-14 text-2xl  '>
        <div className='border w-48 h-48 rounded-full flex flex-col justify-center items-center bg-gray-300'>
          <p>51</p>
          <p>Teacher</p>
        </div>
        <div className='border w-48 h-48 rounded-full flex flex-col justify-center items-center bg-gray-300'>
          <p>Staff</p>
          <p>22</p>
        </div>
        <div className='border w-48 h-48 rounded-full flex flex-col justify-center items-center bg-gray-300'>
          <p>Classes</p>
          <p>15</p>
        </div>
        <div className='border w-48 h-48 rounded-full flex flex-col justify-center items-center bg-gray-300'>
          <p>1500</p>
          <p>Student</p>
        </div>
      </div>

    </div>




      {/* About Us */}


      <div className='w-10/12 m-auto h-auto mt-24 pb-32 '>
         <div className=''>
         <h2 className='flex justify-center pt-16 text-4xl font-semibold'>About Us</h2>
         <p className='flex justify-center p-8 text-center text-xl text-gray-500'>University, institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study. A university differs from a college in that it is usually larger, has a broader curriculum, and offers graduate and professional degrees (master’s and doctorates), professional degrees, in addition to undergraduate degrees (such as the bachelor’s degree). Although universities did not arise in the West until the Middle Ages in Europe, they existed in some parts of Asia and Africa in ancient times.The modern Western university evolved from the medieval schools known as studia generalia; they were generally recognized places of study open to students from all parts of Europe. The earliest studia arose out of efforts to educate clerks and monks beyond the level of the cathedral and monastic schools. The inclusion of scholars from foreign countries constituted the primary difference between the studia and the schools from which they grew. </p>
         </div>
      </div>




      {/* Faculty Member */}


      <div className='h-screen'>
        <h3 className='flex justify-center capitalize text-4xl font-semibold p-10'>Faculty Member</h3>

    <div className='container teacher_container'>

        <div className=''>
        <div>
        <img className='w-full h-64 object-cover'  src={adamCaulton} alt="" />
        </div>
          <div className='text-center'>
          <p className='pl-20 pt-4 text-xl capitalize'>adam Caulton</p>
          </div>
        </div>
        <div className='text-center'>
          <div>
          <img className='w-full h-64 object-cover' src={baccelli} alt="" />
          </div>
          <div className='text-center'>
          <p className='pl-10 pt-4 text-xl capitalize'>baccelli</p>
          </div>
        </div>
        <div className=''>
         <div>
         <img className='w-full h-64 object-cover' src={bobzien} alt="" />
         </div>
          <div className='text-center'>
          <p className='pl-10 pt-4 text-xl capitalize'>bobzien</p>
          </div>
        </div>
        <div className=''>
          <img className='w-full h-64 object-cover' src={catharine_abell} alt="" />
          <div className='text-center'>
          <p className='pl-20 pt-4 text-xl capitalize'>catharine abell</p>
          </div>
        </div>
        <div className=''>
          <div>
          <img className='w-full h-64 object-cover' src={alexander_bown} alt="" />
          </div>
          <div className='text-center'>
          <p className='pl-24 pt-4 text-xl capitalize'>alexander bown</p>
          </div>
        </div>
        <div>
         <div>
         <img className='w-full h-64 object-cover' src={lindsayjudson} alt="" />
         </div>
          <div className='text-center'>
          <p className='pl-24 pt-4 text-xl capitalize'>lindsayjudson</p>
          </div>
        </div>
  
        </div>
      </div>

      
   </>
    
  )
}

export default Home
