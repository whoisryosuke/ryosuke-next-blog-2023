import Headline from "@components/dom/Headline/Headline";
import Slider from "@components/dom/Slider/Slider";
import Switch from "@components/dom/Switch/Switch";
import Text from "@components/dom/Text/Text";
import { useAppStore } from "@store/app";
import { Theme } from "@theme/index";
import React from "react";

type Props = {};

const BlogCustomizationPanel = (props: Props) => {
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
      <Headline>Customize Blog</Headline>
      <Text>High Contrast Blog</Text>
      <Switch />
    </div>
  );
};

export default BlogCustomizationPanel;
