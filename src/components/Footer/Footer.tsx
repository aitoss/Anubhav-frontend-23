import React from "react";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramFill,
  RiDiscordFill
} from "react-icons/ri";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-[#212121] bottom-0 space-y-6 mt-1 p-3 text-center lg:text-left text-[#D9D9D9]">
<div className="bg-[#212121] lg:flex-row flex flex-col justify-between text-[#D9D9D9] footer">
  <div className="lg:ml-6 ">
    <div className="text-[#D9D9D9] lg:text-left text-[34px]">
      Anubhav
    </div>
    <div className="text-[#D9D9D9] lg:text-left  text-base">
      @2023 OSS Club All
    </div>
    <div className="text-[#D9D9D9] lg:text-left  text-base">
      Rights reserved
    </div>
  </div>
  <div className="flex  lg:flex-row flex-col my-auto gap-[5px] lg:gap-[90px]">
  <ul>
  <li className="font-semibold py-1 text-[20px]">Explore</li>
  <li><Link to="/" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Trending Stories</Link></li>
  <li><Link to="/" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Recent Stories</Link></li>
  <li><Link to="/videos" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Popular Videos</Link></li>
</ul>
<ul>
  <li className="font-semibold py-1 text-[20px]">Contribute</li>
  <li><Link to="/create" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Write Article</Link></li>
  <li><Link to="/" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Request Article</Link></li>
  <li><Link to="/videos" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Video with us</Link></li>
</ul>
<ul>
  <li className="font-semibold py-1 text-[20px]">Other</li>
  <li><Link to="/guidelines" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Guidelines</Link></li>
  <li><Link to="/" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">Our Story</Link></li>
  <li><Link to="/" className="text-[#D9D9D9] no-underline hover:text-[#D9D9D9]">About us</Link></li>
</ul>
  </div>
  <div className="flex flex-col px-5 my-auto gap-3">
      <p className="text-[#D9D9D9] text-[20px]">Connect with us</p>
      <div className="flex gap-3 justify-center -mt-1">
        <a href="#">
          <RiTwitterXLine className="text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
        </a>
        <a href="#">
          <RiLinkedinFill className="text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
        </a>
        <a href="#">
          <RiInstagramFill className="text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
        </a>
        <a href="#">
          <RiDiscordFill className="text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
        </a>
      </div>
    </div>


</div>
  <div className="flex justify-center text-[#D9D9D9] sm:text-start ">
  Made with ❤️ by OSS Club
</div>
</div>

        );
};

export default Footer;
