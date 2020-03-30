import React from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";

export default () => {
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
  };

  return <SearchBar onSubmit={handleSubmit} />;
};
