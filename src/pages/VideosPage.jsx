import React from "react";
import Footer from "../components/Landing/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import YouTubePlaylist from "./YouTubePlaylist";
import Videos from "./Videos";

const VideosPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar className="sticky top-0 z-50 bg-white" />
      <div className="flex-grow">
        <Videos />
        {/* <YouTubePlaylist /> */}
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
