import { css } from "styled-components";

export type ScrollbarProps = {
  hideScrollbar?: boolean;
};

export const scrollbarStyles = () => css<ScrollbarProps>`
  scrollbar-color: #999 #333;

  &::-webkit-scrollbar {
    width: 15px; /* for vertical scrollbars */
    height: 15px; /* for horizontal scrollbars */
  }
  /* Scroll bar "thumb" */
  &::-webkit-scrollbar-thumb {
    background: rgba(
      255,
      255,
      255,
      ${({ hideScrollbar }) => (hideScrollbar ? 0 : 0.2)}
    );
    border-radius: ${({ theme }) => theme.radius[0]};
  }
  &:hover::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colors.glassOverlay};
  }
  /* Background styling */
  &::-webkit-scrollbar-track {
  }
  &::-webkit-scrollbar-track:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media (prefers-reduced-motion: no-preference) {
    &::-webkit-scrollbar-thumb {
      transition-property: background-color;
      transition-duration: 710ms;
    }
  }
`;
