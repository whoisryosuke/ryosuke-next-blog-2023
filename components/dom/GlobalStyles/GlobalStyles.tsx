import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
    overflow-y: hidden;
  }

  /* Prism code blocks */
  .remark-highlight {
    margin-bottom: ${({ theme }) => theme.space[8]};
  }

  .remark-highlight pre {
    border-radius: ${({ theme }) => theme.radius[2]};
    background: ${({ theme }) => theme.colors.glassOverlay};
    padding: 3em;
    /* transform: translateZ(10px); */
    box-shadow: 0 2px 16px 0 rgba(10, 10, 14, 0.2);
    
  }
`;

export default GlobalStyles;
