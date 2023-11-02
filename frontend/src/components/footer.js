import React from 'react'
import { MdOutlineFacebook } from 'react-icons/md';
import { BiLogoInstagramAlt,BiLogoYoutube } from 'react-icons/bi';


const Footer = () => {
  return (
    <div className='bg-blue-950 w-screen h-48 mt-20 text-cyan-100 flex flex-col justify-center'>
        <div className='flex justify-center'>
            <a className='text-3xl m-3' href="#"><MdOutlineFacebook/></a>
            <a className='text-3xl m-3' href="#"><BiLogoInstagramAlt/></a>
            <a className='text-3xl m-3' href="#"><BiLogoYoutube/></a>
        </div>
        <div className='text-center'>
            <h4 className='tracking-[.25em]'>@smart-school</h4>
        </div>
    </div>
  )
}

export default Footer