import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {BsSearch} from "react-icons/bs";

const Videos = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-[30%] bg-red-400 flex justify-center align-bottom'>
        <div className='w-[50%] h-full bg-black flex flex-col justify-end items-center'>
          <div className='flex w-[50%]'><input type="text" name="" id="" className='w-full p-2 rounded-[40px]' /><BsSearch className='mt-3'/></div>
          <h1>hello</h1>
        </div>
      </div>
    </>
  )
}

export default Videos