import React from "react";
import OverlayCard from "../OverlayCard/OverlayCard";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";
import { BiMapAlt, BiBuilding, BiMessageRounded } from "react-icons/bi";

type InfoCardProps = {
  title: string;
  subtitle: string;
  Icon: any;
};

const InfoCard = ({ title, subtitle, Icon, ...props }: InfoCardProps) => {
  return (
    <OverlayCard padding={3} {...props}>
      <Stack alignItems="center" responsive={false}>
        <Text>
          <Icon style={{ width: 24, height: 24 }} />
        </Text>
        <Stack vertical gap={0}>
          <Text fontSize={1}>{subtitle}</Text>
          <Text fontWeight="bold">{title}</Text>
        </Stack>
      </Stack>
    </OverlayCard>
  );
};

type Props = {};

const InfoCards = (props: Props) => {
  return (
    <Stack vertical gap={3}>
      <InfoCard title="San Francisco, CA" subtitle="Location" Icon={BiMapAlt} />
      <InfoCard title="PlayStation" subtitle="Currently at" Icon={BiBuilding} />
    </Stack>
  );
};

export default InfoCards;
