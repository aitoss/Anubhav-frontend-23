import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/user1.png';
import logo2 from '../assets/images/user2.png';
import logo3 from '../assets/images/user3.png';
import background2 from '../assets/bg.png';
// import background2 from '../assets/dots-pattern.svg';
import Slider from '../components/Slider/Slider';

export default function HomeScreen() {

  const [search, setsearch] = useState('');

  function onChange(e) {
    setsearch(e.target.value);
  }

  return (<>
    <div className="flex w-full h-screen lg:py-24 flex-col justify-center items-center" style={{ backgroundImage: `url(${background2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='flex h-[600px] flex-col gap-7 justify-center items-center'>
        <h1 className="text-7xl lg:text-8xl  text-[#212121] tracking-wider flex justify-center font-[600]">Anubhav</h1>
        <p className="text-3xl lg:text-4xl text-[#414141]  flex justify-center">Stories of Success</p>
        <div className='flex items-center gap-4'>
          <div className='flex'>
            <img src={logo2} alt="random" className="w-12 mr-[-16px] rounded-full border-[3px] border-white" />
            <img src={logo1} alt="random" className="w-12 mr-[-16px] rounded-full border-[3px] border-white" />
            <img src={logo3} alt="random" className="w-12 mr-[-16px] rounded-full border-[3px] border-white" />
            <div className='w-12 h-12 flex justify-center  items-center font-[500] bg-white text-[#414141]  rounded-full border-4 border-white shadow-lg shadow-[#0000001d] p-4'>3k+</div>
          </div>
          <p className='text-xl text-[#414141] font-[500] '>Articles written</p>
        </div>
        <div className="flex justify-between items-center p-1 bg-[#212121] text-xl placeholder:text-[#a9a9a9] placeholder:font-[300]  font-[300] text-[#d9d9d9]  w-[320px] lg:w-[450px]  rounded-lg transition duration-250 ease-in-out placeholder:focus:text-[#b9b9b9]">
          {/* search icon */}
          <svg className='bg-[#313131] w-[40px] p-1 rounded-md' width="36" height="36" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z" stroke="#b9b9b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29.8333 29.9842L27.1666 27.3175" stroke="#b9b9b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {/* input */}
          <input
            type="text"
            placeholder="Search for your Dreams..."
            className="focus:outline-none bg-[#212121] w-[222px] lg:w-[340px] "
            onChange={onChange}
          />
          {/* ⌘ K */}
          <div className="bg-[#313131] text-[#b9b9b9] p-1 rounded-md font-[400]">⌘ K</div>

        </div>
      </div>
      <div className=""><Slider /></div>
    </div>

  </>
  )
}