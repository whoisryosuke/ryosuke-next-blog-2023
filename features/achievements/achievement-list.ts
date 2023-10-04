import { Toast } from "@store/toasts";

// Achievements are basically toasts. We attach extra props for the Achievements page.
export type AchievementDetails = Toast["content"] & {
  hint?: string;
};
export type AchievementCategory = Record<string, AchievementDetails>;

// Achievement Categories
const BLOG_ACHIEVEMENTS = {
  READ_1: {
    title: "A novel start",
    message: "Read 1 post",
  },
  READ_5: {
    title: "My Name is Captain Page Turner",
    message: "Read 5 posts",
  },
};

const META_ACHIEVEMENTS = {
  ACHIEVE_5: {
    title: "All Star",
    message: "Earned 5 achievements",
  },
};

export type AchievementId =
  | keyof typeof BLOG_ACHIEVEMENTS
  | keyof typeof META_ACHIEVEMENTS;
export type AchievementLog = {
  id: AchievementId;
  date: number;
};

export const ACHIEVEMENT_LIST = {
  blog: BLOG_ACHIEVEMENTS,
  meta: META_ACHIEVEMENTS,
};

export type AchievementCategories = keyof typeof ACHIEVEMENT_LIST;

// Achievement Data Store
export type AchievementData = {
  blogsRead: number;
};

export const DEFAULT_ACHIEVEMENT_DATA = {
  blogsRead: 0,
};
