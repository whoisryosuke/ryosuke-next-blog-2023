import { Toast } from "@store/toasts";

// Achievements are basically toasts. We attach extra props for the Achievements page.
export type AchievementDetails = Toast["content"] & {
  hint?: string;
};
export type AchievementCategory = Record<string, AchievementDetails>;

const BLOG_ACHIEVEMENTS: AchievementCategory = {
  READ_1: {
    title: "A novel start",
    message: "Read 1 post",
  },
  READ_5: {
    title: "My Name is Captain Page Turner",
    message: "Read 5 posts",
  },
};

const META_ACHIEVEMENTS: AchievementCategory = {
  ACHIEVE_5: {
    title: "All Star",
    message: "Earned 5 achievements",
  },
};

export const ACHIEVEMENT_LIST = {
  BLOG: BLOG_ACHIEVEMENTS,
  META: META_ACHIEVEMENTS,
};
