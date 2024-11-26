import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BackgroundDots from "../assets/Background";
import Tag from "../components/InputTag/Tag";
import YoutubeCard from "../components/Video/YoutubeCard";
import YoutubeCardLoading from "../components/Video/YoutubeCardLoading";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID;

const YouTubePlaylist = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPlaylistItems = async () => {
      try {
        const response = await axios.get(
          "/api/youtube/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              maxResults: 25,
              playlistId: PLAYLIST_ID,
              key: API_KEY,
            },
          },
        );
        setYoutubeData(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching playlist items:", error);
        setLoading(false);
      }
    };

    fetchPlaylistItems();
  }, []);

  const tagsData = [
    "Amazon",
    "Google",
    "Zeta",
    "UBS",
    "Microsoft",
    "Deutsche-Bank",
    "Cred",
  ];

  return (
    <>
      <BackgroundDots
        dotSize={1.8}
        dotColor="#cbcbcc"
        backgroundColor=""
        gap={15}
        className="custom-class"
        fade={true}
      />
      <div className="mx-auto flex min-h-screen flex-col">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center overflow-hidden py-6 pt-24 text-center">
          <h2 className="mb-4 text-4xl font-[600] tracking-tight">Videos</h2>
          <div className="flex w-full flex-wrap justify-center gap-4 align-bottom">
            {tagsData.map((tag, index) => {
              return <Tag key={index} name={tag} />;
            })}
          </div>
        </div>
        <div className="flex w-full justify-center p-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 lg:grid-cols-3">
            {loading ? (
              <>
                {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                  <YoutubeCardLoading key={index} />
                ))}
              </>
            ) : (
              <>
                {Array.isArray(youtubeData) &&
                  youtubeData
                    .slice()
                    .reverse()
                    .map((data) => {
                      const { snippet } = data;
                      if (
                        !snippet ||
                        !snippet.thumbnails ||
                        !snippet.thumbnails.medium
                      ) {
                        return null;
                      }
                      const videoId = snippet.resourceId.videoId;
                      const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
                      const { title, description, tags = [] } = snippet;
                      return (
                        <YoutubeCard
                          key={videoId}
                          title={title}
                          img={
                            snippet.thumbnails.maxres?.url ||
                            snippet.thumbnails.medium.url
                          }
                          link={videoLink}
                          description={description}
                          tags={tags}
                        />
                      );
                    })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubePlaylist;
