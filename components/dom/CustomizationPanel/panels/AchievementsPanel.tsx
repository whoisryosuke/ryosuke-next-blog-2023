import Stack from "@components/dom/Stack/Stack";
import Switch from "@components/dom/Switch/Switch";
import Text from "@components/dom/Text/Text";
import { useAppStore } from "@store/app";
import React from "react";
import PanelHeader from "../shared/PanelHeader";
import InputContainer from "../shared/InputContainer";

type Props = {};

const AchievementsPanel = (props: Props) => {
  const { achievementNotification, toggleAchivementNotifications } =
    useAppStore();

  const handleHighContrastBlog = (e: React.FormEvent<HTMLInputElement>) => {
    toggleAchivementNotifications(e.currentTarget.checked);
  };
  return (
    <fieldset style={{ border: 0 }}>
      <Stack vertical>
        <PanelHeader>Achievement Notifications</PanelHeader>
        <InputContainer
          label={
            <Text as="label" for="achievementNotifications">
              Enable notifications
            </Text>
          }
          input={
            <Switch
              name="achievementNotifications"
              checked={achievementNotification}
              onChange={handleHighContrastBlog}
            />
          }
        />
      </Stack>
    </fieldset>
  );
};

export default AchievementsPanel;
