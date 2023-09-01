import React from "react";
import Modal from "../Modal/Modal";
import { useAppStore } from "@store/app";
import Glass from "../Glass/Glass";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { Theme } from "@theme/index";
import Headline from "../Headline/Headline";
import Slider from "../Slider/Slider";

type Props = {
  open: boolean;
};

const CustomizationPanel = ({ open, ...props }: Props) => {
  const { customizations, setUserTheme, toggleModal } = useAppStore();

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

  return (
    <Modal isOpen={open} onClose={onClose} {...props}>
      <Glass width="400px" p={5} modal>
        <Headline>Customize Theme</Headline>
        <Text>Regular: {fontWeightProps.regular}</Text>
        <Slider
          type="range"
          id="volume"
          name="volume"
          value={customizations.theme.fontWeights.regular}
          min="100"
          max="900"
          step="1"
          onChange={handleWeightChangeRegular}
        />
        <Text>Bold: {fontWeightProps.bold}</Text>
        <Slider
          type="range"
          id="volume"
          name="volume"
          value={customizations.theme.fontWeights.bold}
          min="100"
          max="900"
          step="1"
          onChange={handleWeightChangeBold}
        />
      </Glass>
    </Modal>
  );
};

export default CustomizationPanel;
