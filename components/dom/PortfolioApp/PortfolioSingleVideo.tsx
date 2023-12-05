import React, { useEffect, useRef, useState } from "react";
import Box from "../Box/Box";
import Video from "../Video/Video";
import Button from "../Button/Button";
import {
  BiFullscreen,
  BiPause,
  BiPlay,
  BiVolumeFull,
  BiVolumeMute,
} from "react-icons/bi";
import { WorkCardData } from "./types";
import PortfolioSingleTitle from "./PortfolioSingleTitle";
import Slider from "../Slider/Slider";
import Stack from "../Stack/Stack";

type Props = {
  work: WorkCardData;
};

const PortfolioSingleVideo = ({ work, ...props }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    ref.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    ref.current.pause();
    setIsPlaying(false);
  };
  const handleMute = () => {
    ref.current.volume = 0;
    setIsMuted(true);
  };
  const handleRaiseVolume = () => {
    ref.current.volume = 1;
    setIsMuted(false);
  };
  const handleFullScreen = () => {
    if (ref.current.requestFullscreen) {
      ref.current.requestFullscreen();
    }
    // Maybe needed?
    //  else if (ref.current.webkitRequestFullscreen) {
    //   /* Safari */
    //   ref.current.webkitRequestFullscreen();
    // } else if (ref.current.msRequestFullscreen) {
    //   /* IE11 */
    //   ref.current.msRequestFullscreen();
    // }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentVideoProgress = ref.current
        ? (ref.current.currentTime / ref.current.duration) * 100
        : 0;
      setProgress(currentVideoProgress);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box width="60vh" height="60vh" position="relative" {...props}>
      <Video
        ref={ref}
        autoPlay
        loop
        muted
        style={{ width: "60vh", height: "60vh" }}
      >
        <source src={work.video.src} />
      </Video>

      {/* Bottom Video Navigation */}
      <Box
        className="metadata"
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        padding={5}
      >
        <PortfolioSingleTitle work={work} paddingLeft={4} marginBottom={3} />
        <Stack responsive={false} alignItems="center">
          {isPlaying ? (
            <Button
              icon={<BiPause />}
              title="Pause video"
              onlyIcon
              onClick={handlePause}
            />
          ) : (
            <Button
              icon={<BiPlay />}
              title="Play video"
              onlyIcon
              onClick={handlePlay}
            />
          )}

          <Slider
            min={0}
            max={100}
            value={progress}
            height="5px"
            style={{ marginRight: "8px" }}
          />

          {isMuted ? (
            <Button
              icon={<BiVolumeMute />}
              title="Turn volume up to max"
              onlyIcon
              onClick={handleRaiseVolume}
            />
          ) : (
            <Button
              icon={<BiVolumeFull />}
              title="Mute volume"
              onlyIcon
              onClick={handleMute}
            />
          )}

          <Button
            icon={<BiFullscreen />}
            title="Fullscreen video"
            onlyIcon
            onClick={handleFullScreen}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default PortfolioSingleVideo;
