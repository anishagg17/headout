import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

const Flex = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async searchTerm => {
    const {
      data: { items: videos },
    } = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCx3f7HDsrFgUZDx7hyepXvinea6M6MWQU",
        q: searchTerm,
      },
    });
    console.log("videos", videos);
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  useEffect(() => {
    handleSubmit("headout");
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Flex>
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </Flex>
    </div>
  );
};
