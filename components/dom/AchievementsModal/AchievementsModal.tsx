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
import {
  ACHIEVEMENT_LIST,
  AchievementCategories,
} from "features/achievements/achievement-list";
import { capitalizeFirstLetter } from "@utils/string";
import AchievementList from "./AchievementList";

type Props = {
  open: boolean;
};

const AchievementsModal = ({ open, ...props }: Props) => {
  const { toggleModal } = useAppStore();
  const [category, setCategory] = useState<AchievementCategories>("blog");

  const handlePanel = (key: AchievementCategories) => {
    setCategory(key);
  };

  const onClose = () => {
    toggleModal(false);
  };

  const categories = Object.keys(ACHIEVEMENT_LIST);
  const currentCategory = ACHIEVEMENT_LIST[category];
  const categoryNumber = Object.keys(ACHIEVEMENT_LIST[category]).length;

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
              title="Achievements"
              subtitle="All Achievements"
              // icon={<BiDotsHorizontal />}
              sidebar
            />

            <Stack vertical>
              {categories.map((categoryName) => (
                <Button
                  //   icon={panel.icon}
                  justifyContent="flex-start"
                  borderRadius={1}
                  onClick={() =>
                    handlePanel(categoryName as AchievementCategories)
                  }
                >
                  {capitalizeFirstLetter(categoryName)}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box id="content" py={4} px={5} flex={1}>
            <WindowHeader
              title={`${capitalizeFirstLetter(category)}`}
              subtitle={`${categoryNumber} total achievements`}
              // icon={<BiDotsHorizontal />}
            />

            <ScrollBox height="400px">
              <AchievementList achievements={currentCategory} />
            </ScrollBox>
          </Box>
        </Stack>
      </Glass>
    </Modal>
  );
};

export default AchievementsModal;
