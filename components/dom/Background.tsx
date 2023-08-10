import React, { PropsWithChildren } from "react";

type Props = {};

const Background = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Background;
