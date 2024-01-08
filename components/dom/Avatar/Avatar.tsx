import React, { CSSProperties } from "react";

type Props = {
  size?: number;
  rounded?: boolean;
  style?: CSSProperties;
};

const Avatar = ({ size = 36, rounded = false, style, ...props }: Props) => {
  const defaultStyles = {
    borderRadius: rounded ? 999 : 0,
  };
  const imageStyles = {
    ...defaultStyles,
    ...style,
  };

  return (
    <img
      src="./images/avatar.jpg"
      width={size}
      height={size}
      style={imageStyles}
      alt="Avatar which is a picture of Ryo looking up in black and white"
      {...props}
    />
  );
};

export default Avatar;
