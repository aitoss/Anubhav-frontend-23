import React, { useState } from "react";
// import { YOUTUBE_PLAYLIST } from "../constants";
import Tag from "../components/InputTag/Tag";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const VideosPage = () => {
  // const [info, setInfo] = useState(Data);

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
                {/* <YoutubeCards id={item.id} key={item.id} {...item} /> */}
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
