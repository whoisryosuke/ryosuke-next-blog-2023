import React from "react";
import { useInputStore } from "@store/input";
import useKeyPress from "features/achievements/input/hooks/useKeyPress";

type Props = {};

const KeyboardInput = (props: Props) => {
  const { setInput } = useInputStore();
  const movePlayerUp = () => {
    setInput("up", true);
  };
  const movePlayerUpDone = () => {
    setInput("up", false);
  };
  const movePlayerDown = () => {
    setInput("down", true);
  };
  const movePlayerDownDone = () => {
    setInput("down", false);
  };
  useKeyPress("w", null, movePlayerUp, movePlayerUpDone);
  useKeyPress("s", null, movePlayerDown, movePlayerDownDone);

  return <></>;
};

export default KeyboardInput;
