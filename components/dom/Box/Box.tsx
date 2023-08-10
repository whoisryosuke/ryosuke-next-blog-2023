import { styled } from '@linaria/react';
import { Theme, ThemeProp } from '@theme/index';
import { PropsWithChildren } from "react";
import { withTheme } from '../ThemeProvider/ThemeProvider';
import { 
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  bg,
 } from '@utils/theme-utils';

console.log('utility prop fns', bg)

export type BoxProps = ThemeProp & React.HTMLProps<HTMLDivElement> & {
    bg?: keyof Theme['colors'];
    m?: keyof Theme['space'];
    mt?: keyof Theme['space'];
    mr?: keyof Theme['space'];
    mb?: keyof Theme['space'];
    ml?: keyof Theme['space'];
    mx?: keyof Theme['space'];
    my?: keyof Theme['space'];
    p?: keyof Theme['space'];
    pt?: keyof Theme['space'];
    pr?: keyof Theme['space'];
    pb?: keyof Theme['space'];
    pl?: keyof Theme['space'];
    px?: keyof Theme['space'];
    py?: keyof Theme['space'];
  };
  
const Box = withTheme(styled.div<BoxProps>`
  margin: ${m};
  margin-top: ${mt};
  margin-right: ${mr};
  margin-bottom: ${mb};
  margin-left: ${ml};
  /* margin: ${mx}; */
  /* margin: ${my}; */
  padding: ${p};
  padding-top: ${pt};
  padding-right: ${pr};
  padding-bottom: ${pb};
  padding-left: ${pl};
  /* padding: ${px}; */
  /* padding: ${py}; */
  background: ${bg};
`)

export default Box;
