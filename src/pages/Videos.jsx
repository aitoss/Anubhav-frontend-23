import React, { useEffect, useState } from "react";
import { YOUTUBE_PLAYLIST } from "../constants";
import Tag from "../components/InputTag/Tag";
import YoutubeCard from "../components/Video/YoutubeCard";

const Videos = () => {
  const [youtubeData, setYoutubeData] = useState([]);

  useEffect(() => {
    fetch("/VideoData.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setYoutubeData(data))
      .catch(error => console.error('Error loading video data:', error));
  }, []);
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex  flex-col items-center gap-10 overflow-hidden p-5 x-sm:gap-3 mt-20 mb-20">
        <h1 className="text-[#212121] font-[500] x-sm:text-[35px]">Popular Video</h1>
        <div className="w-screen flex flex-wrap gap-4 justify-center align-bottom x-sm:px-6">
          <Tag name="CP" />
          <Tag name="Codeforces" />
          <Tag name="Dev" />
          <Tag name="Hackthon" />
          <Tag name="Deutsche-Bank" />
          <Tag name="Google" />
        </div>
        <div className="w-screen flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {youtubeData.map((data) => {
              return (
                <YoutubeCard
                  title={data.title}
                  img={data.img}
                  link={data.link}
                  description={data.description}
                  tags={data.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
