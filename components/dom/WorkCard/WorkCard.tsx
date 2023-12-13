import React, { CSSProperties } from "react";
import Box from "../Box/Box";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Video from "../Video/Video";
import Link from "next/link";
import format from "date-fns/format";
import { H4 } from "../Headline/Headers";
import { WorkCardProps } from "../PortfolioApp/types";

const WorkCard = ({
  src,
  video,
  title,
  date,
  prototype,
  ...props
}: WorkCardProps) => {
  return (
    // @ts-ignore
    <Box {...props}>
      <Box position="relative">
        {src && <Image src={src} />}
        {video && (
          <Video
            autoPlay
            loop
            muted
            style={{ width: video.width, height: video.height }}
          >
            <source src={video.src} />
          </Video>
        )}
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="end"
          position="absolute"
          bottom={0}
          p={4}
          pt={6}
          background="linear-gradient(180deg, rgba(13,12,12,0) 0%, rgba(13,12,12,1) 100%)"
          borderRadius={1}
        >
          <H4 m={0}>{title}</H4>
          <Text fontSize={0} lineHeight={1} textAlign="right">
            {format(date, "MM/dd/yyyy")}
          </Text>
        </Box>
      </Box>
      {prototype && (
        <Button
          as={"a"}
          //@ts-ignore
          href={prototype}
          solid
          mt={3}
          mb={5}
        >
          View Prototype
        </Button>
      )}
    </Box>
  );
};

export default WorkCard;
