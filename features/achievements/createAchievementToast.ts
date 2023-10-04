import { Toast } from "@store/toasts";

export default function createAchievementToast(content: Toast["content"]) {
  const toast: Toast = {
    content,
    time: new Date().getTime(),
    status: "show",
    type: "achievement",
  };

  return toast;
}
