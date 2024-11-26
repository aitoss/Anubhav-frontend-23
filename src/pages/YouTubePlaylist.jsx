import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubePlaylist = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = import.meta.env.PLAYLIST_ID;

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: "snippet",
              maxResults: 10,
              playlistId: PLAYLIST_ID,
              key: API_KEY,
            },
          },
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching playlist items:", error);
      }
    };

    fetchPlaylistItems();
  }, []);

  return (
    <div>
      <h1>YouTube Playlist</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.snippet.resourceId.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubePlaylist;
