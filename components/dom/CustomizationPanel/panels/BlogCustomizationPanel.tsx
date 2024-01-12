import { H3, H4 } from "@components/dom/Headline/Headers";
import Headline from "@components/dom/Headline/Headline";
import Slider from "@components/dom/Slider/Slider";
import Stack from "@components/dom/Stack/Stack";
import Switch from "@components/dom/Switch/Switch";
import Text from "@components/dom/Text/Text";
import { useAppStore } from "@store/app";
import { Theme } from "@theme/index";
import React from "react";
import PanelHeader from "../shared/PanelHeader";

type Props = {};

const BlogCustomizationPanel = (props: Props) => {
  const { customizations, setUserTheme } = useAppStore();

  const handleHighContrastBlog = (e: React.FormEvent<HTMLInputElement>) => {
    setUserTheme({
      highContrastBlog: e.currentTarget.checked,
    });
  };
  return (
    <fieldset style={{ border: 0 }}>
      <PanelHeader>Customize Blog</PanelHeader>
      <Stack justifyContent="space-between">
        {/* @ts-ignore */}
        <Text as="label" for="highContrastBlog">
          High Contrast Blog
        </Text>
        <Switch
          name="highContrastBlog"
          checked={customizations.theme.highContrastBlog}
          onChange={handleHighContrastBlog}
        />
      </Stack>
    </fieldset>
  );
};

export default BlogCustomizationPanel;
