import React from "react";
import Stack from "../Stack/Stack";
import Box from "../Box/Box";
import Headline from "../Headline/Headline";
import Text from "../Text/Text";
import Button from "../Button/Button";

type WindowHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactElement;
  sidebar?: boolean;
};

const WindowHeader = ({
  title,
  subtitle,
  icon,
  sidebar,
}: WindowHeaderProps) => {
  return (
    <Stack mb={4} p={3} alignItems="flex-start">
      <Box flex={1}>
        <Headline>{title}</Headline>
        {subtitle && (
          <Text color={sidebar && "textOverlay"} display="block">
            {subtitle}
          </Text>
        )}
      </Box>
      {icon && <Button icon={icon} onlyIcon solid />}
    </Stack>
  );
};

export default WindowHeader;
