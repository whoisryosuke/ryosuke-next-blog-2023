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
  const movePlayerLeft = () => {
    setInput("left", true);
  };
  const movePlayerLeftDone = () => {
    setInput("left", false);
  };
  const movePlayerRight = () => {
    setInput("right", true);
  };
  const movePlayerRightDone = () => {
    setInput("right", false);
  };
  const playerConfirm = () => {
    setInput("confirm", true);
  };
  const playerConfirmDone = () => {
    setInput("confirm", false);
  };
  useKeyPress("w", null, movePlayerUp, movePlayerUpDone);
  useKeyPress("s", null, movePlayerDown, movePlayerDownDone);
  useKeyPress("a", null, movePlayerLeft, movePlayerLeftDone);
  useKeyPress("d", null, movePlayerRight, movePlayerRightDone);
  useKeyPress("'", null, playerConfirm, playerConfirmDone);

  return <></>;
};

export default KeyboardInput;
