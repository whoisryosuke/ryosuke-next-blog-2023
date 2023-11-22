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
  BiTrophy,
} from "react-icons/bi";
import styled, { css, keyframes } from "styled-components";
import { useFocusable, FocusContext } from "unified-input";
import { useAppStore } from "@store/app";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import Box from "../Box/Box";
import { useRouter } from "next/router";

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
  position: fixed;
  z-index: 710;
  ${({ orientation }) =>
    orientation == "left" ? MenuLeftStyles : MenuBottomStyles};
`;

const MainNavbar = ({ ...props }: MenuProps) => {
  const { ref, focusId, focusSelf } = useFocusable();
  const { openModal, modalName, customizations } = useAppStore();
  const windowSize = useWindowSize();
  const router = useRouter();

  const orientation: MenuOrientations =
    windowSize.width < 800 ? "bottom" : "left";
  const marginRight = orientation == "left" ? 0 : "8px";
  const marginBottom = orientation == "left" ? "8px" : 0;

  const handleAchievementsModal = () => {
    openModal("achievements");
  };

  const handleCustomizationModal = () => {
    openModal("customization");
  };

  const isCustomizalModalOpen =
    modalName === "customization" && customizations.theme.modal;

  const isAchievementModalOpen =
    modalName === "achievements" && customizations.theme.modal;

  useEffect(() => {
    focusSelf();
  }, []);
  return (
    <FocusContext.Provider value={focusId}>
      <StyledMenu
        ref={ref}
        px={orientation == "left" ? 3 : 6}
        py={orientation == "left" ? 6 : 3}
        borderRadius="round"
        modal
        {...props}
        orientation={orientation}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={orientation == "left" ? "column" : "row"}
        >
          <Button
            as="a"
            href="/"
            title="Home"
            icon={<BiHomeAlt />}
            onlyIcon
            solid={router.asPath === "/"}
            marginRight={marginRight}
            marginBottom={marginBottom}
          />
          <Button
            as={Link}
            href="/blog"
            title="Blog"
            icon={<BiBook />}
            onlyIcon
            solid={router.asPath.includes("blog")}
            marginRight={marginRight}
            marginBottom={marginBottom}
          />
          <Button
            as={Link}
            href="/explorations/work"
            title="Work"
            icon={<BiGhost />}
            onlyIcon
            solid={router.asPath.includes("work")}
            marginRight={marginRight}
            marginBottom={marginBottom}
          />
          <Button
            as={Link}
            href="/explorations/playlist"
            title="Playlist"
            icon={<BiHeadphone />}
            onlyIcon
            solid={router.asPath.includes("playlist")}
            marginRight={marginRight}
            marginBottom={marginBottom}
          />
          <Button
            title="Achievements"
            icon={<BiTrophy />}
            onlyIcon
            solid={isAchievementModalOpen}
            onClick={handleAchievementsModal}
          />
          <Button
            title="Customize"
            icon={<BiPalette />}
            onlyIcon
            solid={isCustomizalModalOpen}
            onClick={handleCustomizationModal}
          />
        </Box>
      </StyledMenu>
    </FocusContext.Provider>
  );
};

MainNavbar.defaultProps = {
  orientation: "bottom",
};

export default MainNavbar;
