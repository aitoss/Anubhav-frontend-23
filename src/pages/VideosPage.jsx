import React from "react";
import Footer from "../components/Landing/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import YouTubePlaylist from "./YouTubePlaylist";

const VideosPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar className="sticky top-0 z-50 bg-white" />
      <div className="flex-grow">
        <YouTubePlaylist />
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
