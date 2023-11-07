import React from "react";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramFill,
  RiDiscordFill
} from "react-icons/ri";

const Footer = () => {
  return (
<div className="bg-[#212121] bottom-0 mt-1 p-4 text-left  text-[#D9D9D9]">
  <div className="lg:ml-6">
    <div className="text-white sm:text-left  text-[34px]">
      Anbv
    </div>
    <div className="text-[#D9D9D9] sm:text-left  text-base">
      @2023 OSS Club All
    </div>
    <div className="text-[#D9D9D9] sm:text-left  text-base">
      Rights reserved
    </div>
    <div className="flex flex-col py-1  sm:items-start gap-3">
      <p className="text-[#D9D9D9]">Contact us on:</p>
      <div className="flex gap-3 -mt-1">
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
