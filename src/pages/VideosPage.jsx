import React, { useEffect, useState } from "react";
import { YOUTUBE_PLAYLIST } from "../constants";
import Tag from "../components/InputTag/Tag";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import YoutubeCard from "../components/Video/YoutubeCard";
import Videos from "./Videos";

const VideosPage = () => {
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
    <div className="flex flex-col h-screen">
      <Navbar className="sticky top-0 z-50 bg-white" />
      <div className="flex-grow">
        <Videos />
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;