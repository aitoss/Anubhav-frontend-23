import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Data from "./data";
import background from '../assets/bg.png';

//commit

const Videos = () => {
  const [info, setInfo] = useState(Data);

  const YoutubeCards = ({ title, img, info }) => {
    const [readMore, setReadMore] = useState(false);

    return (
      <>
        <div className="w-[350px] bg-white border-[1px]  rounded-[20px] hover:shadow-xl hover:border-[3px]">
          <a href="">
            <img
              src={img}
              alt=""
              className="w-full rounded-[10px] rounded-b-none"
            />
          </a>
          <div className="p-[10px]">
            <h2 className="text-black font-[500] text-[20px]">{title}</h2>
            <div className="flex flex-wrap gap-2 pt-[3px]">
              <button className="p-[1px] px-3 rounded-[20px] bg-gray-600 text-[15px] text-white">
                CP
              </button>
              <button className="p-[1px] px-3 rounded-[20px] bg-gray-600 text-[15px] text-white">
                Zeta
              </button>
              <button className="p-[1px] px-3 rounded-[20px] bg-gray-600 text-[15px] text-white">
                Codeforces
              </button>
            </div>
            <p className="leading-5 pt-[3px] content-start text-gray-500">
              {readMore ? info : `${info.substring(0, 100)}...`}
              <span
                className="bg-white p-0 text-blue-400 cursor-pointer"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {readMore ? "read less" : "read more"}
              </span>
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5" style={{backgroundImage: `url(${background})`, backgroundPosition: 'center'}}>
        <div className="w-screen h-[20%] flex justify-center align-bottom pt-6">
          <div className="w-[80%] h-full bg-white flex flex-col justify-end items-center gap-3 x-sm:h-40">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border-2 w-[300px] lg:w-[400px] bg-gray-200 rounded-full pl-4  py-2 focus:outline-none text-black placeholder:text-black  focus:border-transparent transition duration-250 ease-in-out focus:placeholder:text-gray-200 x-sm:w-full"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.8333 29.9842L27.1666 27.3175"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                CP
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                Codeforces
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                Dev
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                Hackthon
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                Deutsche-Bank
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                ACM-ICPC
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-gray-700">
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen  flex justify-center">
          <div className="w-[70%]">
            <h1 className="text-[25px] text-black tracking-[1px]">
              Popular Videos
            </h1>
          </div>
        </div>
        <div className="w-screen flex justify-center">
          <div className="w-[80%]  flex flex-wrap justify-center gap-10 p-3 pt-1">
            {info.map((item) => {
              return <YoutubeCards id={item.id} key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
