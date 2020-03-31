import React from "react";
import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div style={{ margin: "2rem", width: "fit-content" }}>{videoList}</div>
  );
};
