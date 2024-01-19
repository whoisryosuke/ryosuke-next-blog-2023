import { useAppStore } from "@store/app";
import React, { useEffect, useState } from "react";
import { ACHIEVEMENT_LIST, AchievementId } from "../achievement-list";
import { Toast, useToastStore } from "@store/toasts";
import createAchievementToast from "../createAchievementToast";

const useBlogPostRead = () => {
  const [loaded, setLoaded] = useState(false);
  const {
    achievementNotification,
    addAchievement,
    achievementData,
    updateAchievementData,
  } = useAppStore();
  const { addToast } = useToastStore();

  useEffect(() => {
    const blogReadAchievement = (id: AchievementId) => {
      addAchievement({
        id,
        date: new Date().getTime(),
      });
    };

    // Only mark as read once
    if (!loaded) {
      // console.log("[ACHIEVEMENT] Blog post read", achievementData.blogsRead);
      // Update the achievement data store
      const blogsRead = achievementData.blogsRead + 1;
      updateAchievementData({
        blogsRead,
      });

      // Check what number blog post this is and award appropriate achievement
      let key;
      switch (blogsRead) {
        case 1:
          key = "READ_1";
          break;
        case 5:
          key = "READ_5";
          break;
      }
      // console.log("[ACHIEVEMENT] Blog post read added", blogsRead);

      if (key) {
        // console.log("[ACHIEVEMENT] Found a key", key);
        // Save achievement to data store
        blogReadAchievement(key);

        if (achievementNotification) {
          // Send out a notification toast about it
          const toast = createAchievementToast({
            ...ACHIEVEMENT_LIST.blog[key],
            icon: "",
          });
          addToast(toast);
        }
      }

      // Set blog post as loaded so this won't run again until new page load
      setLoaded(true);
    }
  }, [loaded]);
};

export default useBlogPostRead;
