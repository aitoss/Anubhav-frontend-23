import React from "react";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramFill,
  RiDiscordFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-white bottom-0 w-[98.9vw] px-1 ">
      <div className="bg-[#212121] p-3 text-[#D9D9D9] rounded-3xl">
        <div className="lg:ml-6">
          <div className="text-white sm:text-left text-center text-[34px]">
            Anbv
          </div>
          <div className="text-[#D9D9D9] sm:text-left text-center text-base">
            @2023 OSS Club All
          </div>
          <div className="text-[#D9D9D9] sm:text-left text-center text-base">
            Rights reserved
          </div>
          <div className="flex flex-col py-1 items-center sm:items-start gap-3">
            <p className="text-[#D9D9D9]">Contact us on:</p>
            <div className="flex gap-3 -mt-1">
              <a href="#" className="">
                <RiTwitterXLine className=" text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
              </a>
              <a href="#" className="">
                <RiLinkedinFill className=" text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
              </a>
              <a href="#" className="">
                <RiInstagramFill className=" text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
              </a>
              <a href="#" className="">
                <RiDiscordFill className=" text-gray-400 rounded-full text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-[#D9D9D9] sm:text-start text-center">
          Made with ❤️ by OSS Club
        </div>
      </div>
    </div>
  );
};

export default Footer;
