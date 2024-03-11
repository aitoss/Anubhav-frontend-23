import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Data from "./data";
import background from '../assets/bg.png';
import Footer from "../components/Footer/Footer";

//commit

const Videos = () => {
  const [info, setInfo] = useState(Data);

  const YoutubeCards = ({ title, img, info }) => {
    const [readMore, setReadMore] = useState(false);

    return (
      <>
        <div className="w-[350px] mt-[13px] bg-white border-[1px]  rounded-[20px] hover:shadow-xl hover:border-[3px]">
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
              <button className="p-[1px] px-3 rounded-[20px] bg-[#212121] text-[15px] text-white">
                CP
              </button>
              <button className="p-[1px] px-3 rounded-[20px] bg-[#212121] text-[15px] text-white">
                Zeta
              </button>
              <button className="p-[1px] px-3 rounded-[20px] bg-[#212121] text-[15px] text-white">
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
      <div className="flex pt-[90px] flex-col gap-5 overflow-hidden" style={{backgroundImage: `url(${background})`, backgroundPosition: 'center'}}>
        <div className="w-screen h-[50%] flex justify-center align-bottom pt-6">
          <div className="w-[80%] h-full bg-white flex flex-col justify-end items-center gap-3 x-sm:h-40">
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                CP
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                Codeforces
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                Dev
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                Hackthon
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                Deutsche-Bank
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                ACM-ICPC
              </button>
              <button className="p-[2px] px-3 rounded-[20px] bg-[#212121]">
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen  flex justify-center">
          <div className="w-[70%]">
            <h1 className="text-[28px] p-4 lg:ml-[90px] text-black tracking-[1px]">
              Popular Videos
            </h1>
          </div>
        </div>
        <div className="w-screen flex justify-center">
          <div className="w-[80%] flex flex-wrap justify-center gap-10 p-3 pt-1">
            {info.map((item) => {
              return <YoutubeCards id={item.id} key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Videos;
