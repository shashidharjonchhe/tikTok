import { Video } from "expo-av";
import React from "react";
import styled from "styled-components/native";
import { Video as VideoInterface } from "../services/api";
const Play = styled(Video)`
  flex: 1;
`;
const Poster = styled.ImageBackground`
  flex: 1;
`;

const VideoPlayer = ({ video, poster, isPlay }) => {
  return isPlay ? (
    <Play
      rate={1.0}
      volume={1.0}
      isMuted={false}
      shouldPlay
      useNativeControls={false}
      posterSource={poster}
      source={video}
      resizeMode="contain"
    />
  ) : (
    <Poster source={poster} />
  );
};

export default VideoPlayer;
