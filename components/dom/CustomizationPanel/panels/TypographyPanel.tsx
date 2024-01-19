import Headline from "@components/dom/Headline/Headline";
import Slider from "@components/dom/Slider/Slider";
import Text from "@components/dom/Text/Text";
import { useAppStore } from "@store/app";
import { Theme, ThemeOptions } from "@theme/index";
import React from "react";
import PanelHeader from "../shared/PanelHeader";
import Stack from "@components/dom/Stack/Stack";
import Box from "@components/dom/Box/Box";
import InputContainer from "../shared/InputContainer";
import Dropdown from "@components/dom/Dropdown/Dropdown";

type Props = {};

const TypographyPanel = (props: Props) => {
  const { customizations, theme, setTheme, setUserTheme } = useAppStore();

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

  const handleColorTheme = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value == "light" || e.currentTarget.value == "dark") {
    }
    setTheme(e.currentTarget.value as ThemeOptions);
  };

  return (
    <div>
      <PanelHeader>Theme Color</PanelHeader>
      <Stack vertical>
        <InputContainer
          label={
            <Text as="label" for="colorTheme">
              Color Theme
            </Text>
          }
          input={
            <Dropdown
              name="colorTheme"
              defaultValue={theme}
              onChange={handleColorTheme}
              width="50%"
            >
              <option value={"light"}>Light</option>
              <option value={"dark"}>Dark</option>
            </Dropdown>
          }
        />

        <PanelHeader mt={6}>Font Size</PanelHeader>
        <InputContainer
          label={
            <Text as="label" for="fontWeightRegular">
              Regular: {fontWeightProps.regular}
            </Text>
          }
          input={
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
          }
        />
        <InputContainer
          label={
            <Text as="label" for="fontWeightBold" fontWeight="bold">
              Bold: {fontWeightProps.bold}
            </Text>
          }
          input={
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
          }
        />
      </Stack>
    </div>
  );
};

export default TypographyPanel;
