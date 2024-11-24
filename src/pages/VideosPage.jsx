import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import Footer from "../components/Landing/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const VideosPage = () => {
  const [youtubeData, setYoutubeData] = useState([]);

  useEffect(() => {
    fetch("/VideoData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setYoutubeData(data))
      .catch((error) => console.error("Error loading video data:", error));
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <Navbar className="sticky top-0 z-50 bg-white" />
      <div className="flex-grow">
        <Videos />
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
