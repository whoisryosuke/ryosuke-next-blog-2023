import React from "react";
import PocketStation from "./PocketStation";
import { useInputStore } from "@store/input";

type Props = {};

const PocketStationController = (props: Props) => {
  const { input } = useInputStore();

  return <PocketStation controls={input} />;
};

export default PocketStationController;
