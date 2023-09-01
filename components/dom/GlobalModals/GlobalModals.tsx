import { useAppStore } from "@store/app";
import React from "react";
import CustomizationPanel from "../CustomizationPanel/CustomizationPanel";

type Props = {};

const GlobalModals = (props: Props) => {
  const { modalName, customizations } = useAppStore();
  return (
    <>
      {modalName === "customization" && (
        <CustomizationPanel open={customizations.theme.modal} />
      )}
    </>
  );
};

export default GlobalModals;
