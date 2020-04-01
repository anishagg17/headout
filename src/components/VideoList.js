import React from "react";
import VideoItem from "./VideoItem";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  width: fit-content;
  @media screen and (max-width: 992px) {
    flex-direction: row;
  }
`;

export default ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return <Flex>{videoList}</Flex>;
};
