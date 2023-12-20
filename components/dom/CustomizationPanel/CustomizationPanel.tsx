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
  BiBook,
} from "react-icons/bi";
import TypographyPanel from "./panels/TypographyPanel";
import BlogCustomizationPanel from "./panels/BlogCustomizationPanel";

const PANELS = {
  typography: {
    title: "Typography",
    icon: <BiFont />,
    panel: <TypographyPanel />,
  },
  blog: {
    title: "Blog",
    icon: <BiBook />,
    panel: <BlogCustomizationPanel />,
  },
};

type PanelNames = keyof typeof PANELS;

type Props = {
  open: boolean;
};

const CustomizationPanel = ({ open, ...props }: Props) => {
  const { toggleModal } = useAppStore();
  const [currentPanel, setCurrentPanel] = useState<PanelNames>("typography");

  const onClose = () => {
    toggleModal(false);
  };

  const handlePanel = (key: PanelNames) => {
    setCurrentPanel(key);
  };

  const panelsMap = Object.entries(PANELS);

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      width={{ mobile: "100%", computer: "80%", widescreen: "50vw" }}
      {...props}
    >
      <Glass modal>
        <Stack>
          <Box
            id="sidebar"
            width={{ mobile: "100%", tablet: "250px" }}
            bg="rgba(0,0,0,0.2)"
            p={4}
            m={"1px"}
            borderTopLeftRadius={18}
            borderBottomLeftRadius={{ mobile: 0, tablet: 18 }}
            borderTopRightRadius={{ mobile: 18, tablet: 0 }}
          >
            <WindowHeader
              title="User Settings"
              subtitle="Theme Customization"
              // icon={<BiDotsHorizontal />}
              sidebar
            />

            <Stack vertical>
              {panelsMap.map(([key, panel]) => (
                <Button
                  icon={panel.icon}
                  iconSize={{
                    width: "16px",
                    height: "16px",
                  }}
                  justifyContent="flex-start"
                  borderRadius={1}
                  onClick={() => handlePanel(key as PanelNames)}
                >
                  {panel.title}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box id="content" py={4} px={5} flex={1}>
            <WindowHeader
              title={`${PANELS[currentPanel].title} settings`}
              // subtitle="420 songs"
              // icon={<BiDotsHorizontal />}
            />

            <ScrollBox height="400px">{PANELS[currentPanel].panel}</ScrollBox>
          </Box>
        </Stack>
      </Glass>
    </Modal>
  );
};

export default CustomizationPanel;
