import React, { useState } from "react";
import Data from "./data";
import { YOUTUBE_PLAYLIST } from "../constants";
import Tag from "../components/InputTag/Tag";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const VideosPage = () => {
  const [info, setInfo] = useState(Data);

  const YoutubeCards = ({ id, title, img, info, tags }) => {
    const [readMore, setReadMore] = useState(false);

    return (
      <div className="w-[20rem] bg-white transition-all">
        <a href={YOUTUBE_PLAYLIST + id} target="_blank">
          <img src={img} alt="" className="w-full rounded-[10px] pb-2" />
        </a>
        <div className="">
          <h2 className="text-black font-[500] text-[20px]">{title}</h2>
          <div className="flex flex-wrap gap-2 pt-[3px]">
            {tags.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </div>
          <p className="leading-5 pt-[3px] content-start text-gray-500">
            {readMore ? info : `${info.substring(0, 100)}...`}
            <span
              className="bg-white p-0 text-blue-400 cursor-pointer"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "read less" : "read more"}
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar className="sticky top-0 z-50 bg-white" />
      <div className="flex-grow">
        <div className="flex flex-col justify-center items-center gap-10 overflow-hidden p-5 x-sm:gap-3 mt-20">
          <h1 className="text-black x-sm:text-[35px]">Popular Video</h1>
          <div className="w-screen flex flex-wrap gap-4 justify-center align-bottom">
            <Tag name="CP" />
            <Tag name="Codeforces" />
            <Tag name="Dev" />
            <Tag name="Hackthon" />
            <Tag name="Deutsche-Bank" />
            <Tag name="Google" />
          </div>

          <div className="w-screen flex justify-center">
            <div className="w-[80%] flex flex-wrap justify-center gap-10 p-3 pt-1 x-sm:w-[100%]">
              {info.map((item) => (
                <YoutubeCards id={item.id} key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
