import { AchievementDetails } from "features/achievements/achievement-list";
import React from "react";
import Text from "../Text/Text";
import Box from "../Box/Box";
import ContentListItem from "../ContentListItem/ContentListItem";
import { H3, H4 } from "../Headline/Headers";
import { TOAST_ICONS } from "../Toasts/icons";
import { BiLock } from "react-icons/bi";

type Props = {
  isAchieved: boolean;
  achievement: AchievementDetails;
  key: string;
};

const AchievementItem = ({ key, achievement, isAchieved }: Props) => {
  const Icon = achievement.icon
    ? TOAST_ICONS[achievement.icon]
    : TOAST_ICONS.TROPHY;

  return (
    <ContentListItem
      display="flex"
      justifyContent="space-between"
      key={key}
      p={4}
      alignItems="center"
      borderBottom="1px solid"
      borderColor="glassBorder"
    >
      <Box display="flex">
        <Box color={isAchieved ? "gold" : "textOverlay"}>
          <Icon style={{ width: "36px", height: "36px" }} />
        </Box>
        <Box ml={5}>
          <H4 m={0} mb={3}>
            {achievement.title}
          </H4>
          <Text>{achievement.message}</Text>
        </Box>
      </Box>
      {!isAchieved && (
        <Box color={"textOverlay"}>
          <BiLock style={{ width: "18px", height: "18px" }} />
        </Box>
      )}
    </ContentListItem>
  );
};

export default AchievementItem;
