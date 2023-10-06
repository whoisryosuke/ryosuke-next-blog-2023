import { useInputStore } from "@store/input";
import React, { useEffect } from "react";
import KeyboardInput from "./KeyboardInput";

type Props = {};

const InputManager = (props: Props) => {
  return (
    <>
      <KeyboardInput />
    </>
  );
};

export default InputManager;
