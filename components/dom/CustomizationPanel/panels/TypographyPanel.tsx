import Headline from "@components/dom/Headline/Headline";
import Slider from "@components/dom/Slider/Slider";
import Text from "@components/dom/Text/Text";
import { useAppStore } from "@store/app";
import { Theme } from "@theme/index";
import React from "react";
import PanelHeader from "../shared/PanelHeader";
import Stack from "@components/dom/Stack/Stack";

type Props = {};

const TypographyPanel = (props: Props) => {
  const { customizations, setUserTheme } = useAppStore();

  const fontWeightProps = customizations.theme.fontWeights;

  const handleWeightChangeRegular = (e: React.FormEvent<HTMLInputElement>) => {
    handleWeightChange(e, "regular");
  };

  const handleWeightChangeBold = (e: React.FormEvent<HTMLInputElement>) => {
    handleWeightChange(e, "bold");
  };

  const handleWeightChange = (
    e: React.FormEvent<HTMLInputElement>,
    type: keyof Theme["fontWeights"]
  ) => {
    setUserTheme({
      fontWeights: {
        ...customizations.theme.fontWeights,
        [type]: e.currentTarget.value,
      },
    });
  };
  return (
    <div>
      <PanelHeader>Customize Theme</PanelHeader>
      <Stack vertical>
        <Stack vertical>
          {/* @ts-ignore */}
          <Text as="label" for="fontWeightRegular">
            Regular: {fontWeightProps.regular}
          </Text>
          <Slider
            type="range"
            id="volume"
            name="fontWeightRegular"
            value={customizations.theme.fontWeights.regular}
            min="100"
            max="900"
            step="1"
            onChange={handleWeightChangeRegular}
          />
        </Stack>
        <Stack vertical>
          {/* @ts-ignore */}
          <Text as="label" for="fontWeightBold" fontWeight="bold">
            Bold: {fontWeightProps.bold}
          </Text>
          <Slider
            type="range"
            id="volume"
            name="fontWeightBold"
            value={customizations.theme.fontWeights.bold}
            min="100"
            max="900"
            step="1"
            onChange={handleWeightChangeBold}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default TypographyPanel;
