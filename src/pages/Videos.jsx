import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import { BsSearch } from "react-icons/bs";
import Data from "./data";

//commit

const Videos = () => {
  const [info, setInfo] = useState(Data);

  const YoutubeCards = ({title, img, info}) => {

    const [readMore, setReadMore] = useState(false);

    return (
      <>
        <div className="w-[350px] bg-white border-[3px]  rounded-[10px]">
          <a href="">
            <img
              src={img}
              alt=""
              className="w-full rounded-[10px] rounded-b-none"
            />
            <div className="p-[10px]">
              <h2 className="text-black font-[500]">{title}</h2>
              <div className="flex flex-wrap gap-2 pt-[3px]">
                <button className="p-[1px] px-3 rounded-[20px] bg-gray-700 text-[15px] text-white">
                  CP
                </button>
                <button className="p-[1px] px-3 rounded-[20px] bg-gray-700 text-[15px] text-white">
                  Zeta
                </button>
                <button className="p-[1px] px-3 rounded-[20px] bg-gray-700 text-[15px] text-white">
                  Codeforces
                </button>
              </div>
              <p className="leading-5 pt-[3px] content-start text-black">
                {readMore ? info : `${info.substring(0, 100)}...`}
                <button className="bg-white p-0 text-blue-400" onClick={() =>{
                  setReadMore(!readMore);
                }}>{readMore ? "read less": "read more"}</button>
              </p>
            </div>
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5">
        <div className="w-screen h-[20%] flex justify-center align-bottom pt-6">
          <div className="w-[80%] h-full bg-white flex flex-col justify-end items-center gap-3 x-sm:h-40">
            <div className="flex w-[80%] justify-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-[30%] p-2 rounded-[40px] bg-gray-200 focus:outline-none pl-3 text-black placeholder:text-black focus:placeholder:text-gray-200 x-sm:w-full"
              />
              <BsSearch className="mt-3 text-black w-9" />
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
              return <YoutubeCards id={item.id} key={item.id} {...item}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
