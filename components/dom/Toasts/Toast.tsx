import React from "react";
import Glass from "../Glass/Glass";
import Box from "../Box/Box";
import { H4 } from "../Headline/Headers";
import Text from "../Text/Text";
import { Toast as ToastData } from "@store/toasts";
import Stack from "../Stack/Stack";
import { TOAST_ICONS } from "./icons";

type Props = {
  toast: ToastData;
};

const Toast = ({ toast }: Props) => {
  const Icon = toast.content.icon && TOAST_ICONS[toast.content.icon];
  return (
    <Glass width={"250px"} px={4} py={4} mb={3} borderRadius={2}>
      <Stack alignItems="center">
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
