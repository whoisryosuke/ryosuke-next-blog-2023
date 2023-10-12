import React from "react";

const useRequestAnimationFrame = (callback) => {
  const requestRef = React.useRef<number>();
  const previousTimeRef = React.useRef();

  const animate = (time) => {
    if (previousTimeRef.current) callback(time - previousTimeRef.current);
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};

export default useRequestAnimationFrame;
