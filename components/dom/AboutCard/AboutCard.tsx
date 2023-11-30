import React from "react";
import Box from "../Box/Box";
import Glass from "../Glass/Glass";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";
import Avatar from "../Avatar/Avatar";
import InfoCards from "./InfoCards";
import SocialSlider from "./SocialSlider";

type Props = {};

const AboutCard = (props: Props) => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100vh"
      top="0"
      left="0"
      display="flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
    >
      <Glass width="300px" marginLeft="100px" padding={4}>
        <Stack vertical gap={4}>
          <Stack>
            <Box>
              <Avatar size={48} rounded />
            </Box>
            <Stack vertical gap={1}>
              <Text fontWeight="bold">Ryosuke Hana</Text>
              <Text>Designer / Developer</Text>
            </Stack>
          </Stack>

          <InfoCards />

          <SocialSlider marginTop={3} />
        </Stack>
      </Glass>
    </Box>
  );
};

export default AboutCard;
