import React from "react";

type Props = {
  size: number;
};

const Avatar = ({ size = 36 }: Props) => {
  return <img src="/images/avatar.png" width={size} height={size} />;
};

export default Avatar;
