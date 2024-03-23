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

  const TagsOfVideo= ({name}) =>{
    return (
      <div>
        <button className="p-[2px] px-3 rounded-[20px] bg-[#212121] text-white hover:none">
                {name}
        </button>
      </div>
    )
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex  flex-col items-center gap-10 overflow-hidden p-5 x-sm:gap-3 mt-24">
      <h1 className="text-black  x-sm:text-[35px]">Popular Video</h1>
        <div className="w-screen flex flex-wrap gap-4 justify-center align-bottom ">
        <TagsOfVideo name="CP" />
              <TagsOfVideo name="Codeforces" />
              <TagsOfVideo name="Dev" />
              <TagsOfVideo name="Hackthon" />
              <TagsOfVideo name="Deutsche-Bank" />
              <TagsOfVideo name="Google" />
        </div>
        <div className="w-screen flex justify-center">
          <div className="w-[80%] flex flex-wrap justify-center gap-10 p-3 pt-1">
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
