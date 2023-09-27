import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin:0;
    overflow: hidden;
  }

  /* Prism code blocks */
  .remark-highlight {
    font-family: ${({ theme }) => theme.fonts.monospace};
    margin-bottom: ${({ theme }) => theme.space[8]};
  }

  .remark-highlight pre {
    border-radius: ${({ theme }) => theme.radius[2]};
    background: ${({ theme }) => theme.colors.glassContrast};
    padding: 3em;
    /* transform: translateZ(10px); */
    box-shadow: 0 2px 16px 0 rgba(10, 10, 14, 0.2); 
  }

  /* Inline code blocks - MDX can't replace these for some reason */
  
  code {
    display: inline-block;
    margin-left: ${({ theme }) => theme.space[1]};
    margin-right: ${({ theme }) => theme.space[1]};
    color: ${({ theme }) => theme.colors.text};
    padding-left: ${({ theme }) => theme.space[3]};
    padding-right: ${({ theme }) => theme.space[3]};
    padding-top: ${({ theme }) => theme.space[0]};
    padding-bottom: ${({ theme }) => theme.space[0]};
    position: relative;
    word-break: break-word;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-family: ${({ theme }) => theme.fonts.monospace};
  }

  code:after {
    content: "";
    width: 100%;
    height: 70%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 15%;

    background: ${({ theme }) => theme.gradients.blue.default};
    z-index: -1;
    opacity: 1;
  }

  /* Inline <code> inside a <pre> code block shouldn't be styled */
  pre code:after {
    background:none;
  }

  code:hover:after {
    opacity: 1;
  }
`;

export default GlobalStyles;
