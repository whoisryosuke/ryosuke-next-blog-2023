import React, { CSSProperties, useEffect, useRef, useState } from "react";
import p5 from "p5";
import P5Container from "./P5Container";
import { isServer } from "@utils/next";

type Props = {
  title: string;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  sketch: (p: p5) => void;
};

const P5Viz = ({ title, width, height, sketch, ...props }: Props) => {
  const p5ref = useRef<p5 | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current && p5ref.current == null)
      p5ref.current = new p5(sketch, divRef.current);
  }, [sketch]);

  return (
    <P5Container title={title} width={width} height={height} {...props}>
      <div ref={divRef}></div>
    </P5Container>
  );
};

export default P5Viz;