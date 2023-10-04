import { useAppStore } from "@store/app";
import React from "react";
import CustomizationPanel from "../CustomizationPanel/CustomizationPanel";
import AchievementsModal from "../AchievementsModal/AchievementsModal";

type Props = {};

const GlobalModals = (props: Props) => {
  const { modalName, customizations } = useAppStore();
  return (
    <>
      <CustomizationPanel
        open={modalName === "customization" && customizations.theme.modal}
      />
      <AchievementsModal
        open={modalName === "achievements" && customizations.theme.modal}
      />
    </>
  );
};

export default GlobalModals;
