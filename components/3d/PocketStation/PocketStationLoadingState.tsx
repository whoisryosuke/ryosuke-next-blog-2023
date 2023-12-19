import Box from "@components/dom/Box/Box";
import LoadingBar from "@components/dom/LoadingBar/LoadingBar";
import Text from "@components/dom/Text/Text";
import React from "react";

type Props = {};

const PocketStationLoadingState = (props: Props) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      position="absolute"
      top={0}
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize={0} mb={2}>
        Loading 3D...
      </Text>
      <LoadingBar />
    </Box>
  );
};

export default PocketStationLoadingState;
