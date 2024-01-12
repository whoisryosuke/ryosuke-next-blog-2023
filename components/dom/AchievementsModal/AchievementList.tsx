import {
  ACHIEVEMENT_LIST,
  AchievementCategory,
} from "features/achievements/achievement-list";
import React from "react";
import { H3 } from "../Headline/Headers";
import Text from "../Text/Text";
import Box from "../Box/Box";
import { TOAST_ICONS } from "../Toasts/icons";
import { useAppStore } from "@store/app";
import { BiLock } from "react-icons/bi";
import AchievementItem from "./AchievementItem";

type Props = {
  achievements: AchievementCategory;
};

const AchievementList = ({ achievements, ...props }: Props) => {
  const { achievementsLog } = useAppStore();
  const list = Object.entries(achievements);

  return (
    <Box>
      {list.map(([key, achievement]) => {
        const isAchieved = achievementsLog.some(({ id }) => id === key);

        return (
          <AchievementItem
            key={key}
            achievement={achievement}
            isAchieved={isAchieved}
          />
        );
      })}
    </Box>
  );
};

export default AchievementList;
