import React from "react";
import Glass from "../Glass/Glass";
import Box from "../Box/Box";
import { H4 } from "../Headline/Headers";
import Text from "../Text/Text";
import { Toast as ToastData } from "@store/toasts";
import Stack from "../Stack/Stack";
import { TOAST_ICONS } from "./icons";
import { useAppStore } from "@store/app";
import { noop } from "@utils/handlers";

type Props = {
  toast: ToastData;
};

const Toast = ({ toast }: Props) => {
  const { openModal, modalName, customizations } = useAppStore();

  const Icon = toast.content.icon && TOAST_ICONS[toast.content.icon];

  const handleAchievementsModal = () => {
    openModal("achievements");
  };

  return (
    <Glass
      width={{ default: "80%", tablet: "250px" }}
      px={4}
      py={4}
      mb={3}
      ml={{
        default: "10%",
        tablet: 0,
      }}
      borderRadius={2}
      onClick={toast.type === "achievement" ? handleAchievementsModal : noop}
      blur={6}
    >
      <Stack>
        {toast.content.icon && (
          <Text color="textOverlay" lineHeight={0}>
            <Icon style={{ width: "36px", height: "36px" }} />
          </Text>
        )}
        <Stack flex={1} minWidth={0} vertical gap={0}>
          <H4 mt={0} mb={0}>
            {toast.content.title}
          </H4>
          <Text
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {toast.content.message}
          </Text>
        </Stack>
      </Stack>
    </Glass>
  );
};

export default Toast;
