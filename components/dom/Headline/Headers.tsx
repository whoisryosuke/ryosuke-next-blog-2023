import React from "react";
import Headline from "./Headline";

export const H1 = (props) => (
  <Headline fontSize={5} lineHeight={6} mt={8} mb={5} {...props} />
);
export const H2 = (props) => (
  <Headline as="h2" fontSize={4} lineHeight={5} mt={8} mb={5} {...props} />
);
export const H3 = (props) => (
  <Headline as="h3" fontSize={3} lineHeight={3} mt={8} mb={5} {...props} />
);
export const H4 = (props) => (
  <Headline as="h4" fontSize={2} lineHeight={3} mt={8} mb={5} {...props} />
);
export const H5 = (props) => (
  <Headline as="h5" fontSize={1} lineHeight={2} mt={8} mb={5} {...props} />
);
export const H6 = (props) => (
  <Headline
    as="h6"
    fontFamily="heading"
    fontSize={1}
    lineHeight={1}
    mt={8}
    mb={5}
    {...props}
  />
);
