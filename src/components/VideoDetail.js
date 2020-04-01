import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Main = styled.div`
  width: 120%;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Container = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms;
  background-color: #fff;
  display: block;
  margin: 2rem;
  @media screen and (max-width: 992px) {
    margin: 1.5rem;
  }
`;

const Desc = styled.div`
  margin-top: 1rem;
  @media screen and (max-width: 992px) {
    font-size: 0.8rem;
  }
`;
const Title = styled.div`
  font-size: 1.7rem;
  // font-family: monospace;
  @media screen and (max-width: 992px) {
    font-size: 1.1rem;
  }
`;

const Center = styled.div`
  width: 90vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 100vw;
  }
`;

export default ({ video }) => {
  if (!video) {
    return (
      <Center>
        <ClipLoader size={150} color={"#1976d2"} loading />
      </Center>
    );
  }

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Main>
      <Container style={{ height: "60%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={src}
        />
      </Container>
      <Container style={{ padding: "13px" }}>
        <Title>
          {video.snippet.title} <b>{video.snippet.channelTitle}</b>
        </Title>
        <Desc>{video.snippet.description}</Desc>
      </Container>
    </Main>
  );
};
