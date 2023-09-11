import React, { useEffect } from "react";
import Glass from "../Glass/Glass";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import {
  BiHomeAlt,
  BiBook,
  BiGhost,
  BiHeadphone,
  BiColor,
  BiPaint,
  BiPalette,
} from "react-icons/bi";
import styled, { css, keyframes } from "styled-components";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useAppStore } from "@store/app";
import Link from "next/link";

type MenuOrientations = "left" | "bottom";

type MenuProps = {
  orientation: MenuOrientations;
};

const leftHideAnimation = keyframes`
  from {
    opacity:0;
    transform: translateX(-200%);
  }

  to {
    opacity:1;
    transform: translateX(0%);
  }
`;

const bottomHideAnimation = keyframes`
  from {
    opacity:0;
    transform: translateY(200%) translateX(-50%);
  }

  to {
    opacity:1;
    transform: translateY(0%) translateX(-50%);
  }
`;

const ANIMATION_TIME = "710ms";
const ANIMATION_CURVE = "cubic-bezier(.65,.36,.22,.89)";

const MenuLeftStyles = () => css<MenuProps>`
  top: 20%;
  left: ${({ theme }) => theme.space[5]};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${leftHideAnimation} ${ANIMATION_TIME} ${ANIMATION_CURVE};
  }
`;

const MenuBottomStyles = () => css<MenuProps>`
  left: 50%;
  bottom: ${({ theme }) => theme.space[5]};

  transform: translateX(-50%);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${bottomHideAnimation} ${ANIMATION_TIME} ${ANIMATION_CURVE};
  }
`;

const StyledMenu = styled(Glass)<MenuProps>`
  position: absolute;
  z-index: 710;
  ${({ orientation }) =>
    orientation == "left" ? MenuLeftStyles : MenuBottomStyles};
`;

const MainNavbar = ({ orientation, ...props }: MenuProps) => {
  const { ref, focusKey, focusSelf } = useFocusable();
  const { openModal } = useAppStore();

  const handleCustomizationModal = () => {
    openModal("customization");
  };

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);
  return (
    <FocusContext.Provider value={focusKey}>
      <StyledMenu
        ref={ref}
        px={orientation == "left" ? 3 : 6}
        py={orientation == "left" ? 6 : 3}
        orientation={orientation}
        borderRadius="round"
        modal
        {...props}
      >
        <Stack gap="12px" alignItems="center" vertical={orientation == "left"}>
          <Button as="a" href="/" title="Home" icon={<BiHomeAlt />} onlyIcon />
          <Button
            as={Link}
            href="/explorations/blog"
            title="Blog"
            icon={<BiBook />}
            onlyIcon
          />
          <Button
            as={Link}
            href="/explorations/toast"
            title="Work"
            icon={<BiGhost />}
            onlyIcon
          />
          <Button
            as={Link}
            href="/explorations/playlist"
            title="Playlist"
            icon={<BiHeadphone />}
            onlyIcon
          />
          <Button
            title="Customize"
            icon={<BiPalette />}
            onlyIcon
            onClick={handleCustomizationModal}
          />
        </Stack>
      </StyledMenu>
    </FocusContext.Provider>
  );
};

MainNavbar.defaultProps = {
  orientation: "bottom",
};

export default MainNavbar;
