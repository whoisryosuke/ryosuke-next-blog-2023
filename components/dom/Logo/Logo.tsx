import React from "react";
import useStore from "src/store";
import Box from "../Box/Box";
import Text from "../Text/Text";
import {
  logoContainerStyles,
  logoLinkStyles,
  logoTextStyles,
} from "./Logo.css";

type Props = {};

const Logo = (props: Props) => {
  const { setMainNav } = useStore();
  const clearHover = () => {
    setMainNav("none");
  };
  return (
    <Box
      className={logoContainerStyles}
      onMouseEnter={() => setMainNav("logo")}
      onMouseLeave={clearHover}
    >
      <a href="/" className={logoLinkStyles}>
        <Text
          fontFamily="heading"
          fontSize={{
            mobile: 2,
            tablet: 5,
          }}
          className={logoTextStyles}
        >
          Ryosuke
        </Text>
      </a>
    </Box>
  );
};

export default Logo;
