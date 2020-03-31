import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
  width: 90%;
  // height: 100%;
  // margin-left: auto;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  height: 12rem;
  width: 70%;
  background-fit: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`;

const Bold = styled.b`
  padding: 1px 5px;
`;

export default ({ video, onVideoSelect }) => {
  return (
    <Container
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <Img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      <Bold>{video.snippet.title}</Bold>
    </Container>
  );
};
