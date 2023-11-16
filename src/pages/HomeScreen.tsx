import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/user1.png';
import logo2 from '../assets/images/user2.png';
import logo3 from '../assets/images/user3.png';
import background from '../assets/bg.png';
import background2 from '../assets/dots-pattern.svg';
import Slider from '../components/Slider/Slider';
import adobe from '../assets/company logo/adobe.svg';
import amazon from '../assets/company logo/amazon.svg';
import atlassian from '../assets/company logo/atlassian.svg';
import DeutscheBank from '../assets/company logo/Deutsche_Bank.png';
import cisco from '../assets/company logo/cisco.svg';
import google from '../assets/company logo/google.svg';
import masterCard from '../assets/company logo/masterCard.svg';
import microsoft from '../assets/company logo/microsoft.svg';
import uber from '../assets/company logo/uber.svg';

export default function HomeScreen() {

  const [search, setsearch] = useState('');

  function onChange(e) {
    setsearch(e.target.value);
  }

  return (<>
    <div className="flex w-full flex-col justify-center items-center" style={{ backgroundImage: `url(${background2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='flex h-[650px] flex-col gap-7 justify-center items-center'>
        <h1 className="text-6xl lg:text-8xl head-text text-[#212121] tracking-wider flex justify-center font-[600]">Anubhav</h1>
        <p className="text-3xl lg:text-4xl text-[#414141] head-text flex justify-center">Stories of Success</p>
        <div className='flex items-center gap-4'>
          <div className='flex'>
            <img src={logo2} alt="random" className="w-12 mr-[-16px] rounded-full border-[3px] border-white" />
            <img src={logo1} alt="random" className="w-12 mr-[-16px] rounded-full border-[3px] border-white" />
            <img src={logo3} alt="random" className="w-12 mr-[-16px] rounded-full border-[3px] border-white" />
            <div className='w-12 h-12 flex justify-center head-text items-center font-[500] bg-white text-[#414141]  rounded-full border-4 border-white shadow-lg shadow-[#0000001d] p-4'>3k+</div>
          </div>
          <p className='text-xl text-[#414141] font-[500] head-text'>Articles written</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for your dreams"
            className="border-2 bg-[#212121] text-xl placeholder:text-[#d9d9d9d9] placeholder:focus:text-[#d9d9d980] font-[400] text-[#d9d9d9] head-text w-[300px] lg:w-[400px] border-[#212121] rounded-full pl-4 pr-4 py-2 focus:outline-none  focus:border-transparent transition duration-250 ease-in-out"
            onChange={onChange}
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29.8333 29.9842L27.1666 27.3175" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
        </div>
      </div>
      <div className=""><Slider /></div>
    </div>
  </>
  )
}