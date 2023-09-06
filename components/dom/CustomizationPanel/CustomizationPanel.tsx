import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useAppStore } from "@store/app";
import Glass from "../Glass/Glass";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { Theme } from "@theme/index";
import Headline from "../Headline/Headline";
import Slider from "../Slider/Slider";
import Stack from "../Stack/Stack";
import Box from "../Box/Box";
import ScrollBox from "../ScrollBox/ScrollBox";
import WindowHeader from "../WindowHeader/WindowHeader";
import {
  BiDotsHorizontal,
  BiMusic,
  BiMicrophone,
  BiTime,
  BiFolder,
  BiBong,
  BiUser,
  BiFont,
} from "react-icons/bi";
import TypographyPanel from "./panels/TypographyPanel";

const PANELS = {
  typography: <TypographyPanel />,
};

type PanelNames = keyof typeof PANELS;

type Props = {
  open: boolean;
};

const CustomizationPanel = ({ open, ...props }: Props) => {
  const { customizations, setUserTheme, toggleModal } = useAppStore();
  const [currentPanel, setCurrentPanel] = useState<PanelNames>("typography");

  const fontWeightProps = customizations.theme.fontWeights;

  const handleWeightChangeRegular = (e: React.FormEvent<HTMLInputElement>) => {
    handleWeightChange(e, "regular");
  };

  const handleWeightChangeBold = (e: React.FormEvent<HTMLInputElement>) => {
    handleWeightChange(e, "bold");
  };

  const handleWeightChange = (
    e: React.FormEvent<HTMLInputElement>,
    type: keyof Theme["fontWeights"]
  ) => {
    setUserTheme({
      fontWeights: {
        ...customizations.theme.fontWeights,
        [type]: e.currentTarget.value,
      },
    });
  };

  const onClose = () => {
    toggleModal(false);
  };

  const handleTypographyPanel = () => {
    setCurrentPanel("typography");
  };

  return (
    <Modal isOpen={open} onClose={onClose} {...props}>
      <Glass width="70vw" modal>
        <Stack>
          <Box
            id="sidebar"
            width="250px"
            bg="rgba(0,0,0,0.2)"
            p={4}
            m={"1px"}
            borderTopLeftRadius={18}
            borderBottomLeftRadius={18}
          >
            <WindowHeader
              title="User Settings"
              subtitle="Theme Customization"
              // icon={<BiDotsHorizontal />}
              sidebar
            />

            <Stack vertical>
              <Button
                icon={<BiFont />}
                justifyContent="flex-start"
                borderRadius={1}
                onClick={handleTypographyPanel}
              >
                Typography
              </Button>
            </Stack>
          </Box>
          <Box id="content" py={4} px={5} flex={1}>
            <WindowHeader
              title="Playlists"
              // subtitle="420 songs"
              // icon={<BiDotsHorizontal />}
            />

            <ScrollBox height="400px">{PANELS[currentPanel]}</ScrollBox>
          </Box>
        </Stack>
      </Glass>
    </Modal>
  );
};

export default CustomizationPanel;
