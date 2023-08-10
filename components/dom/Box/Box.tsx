import { styled } from '@linaria/react';
import { Theme, ThemeProp } from '@theme/index';
import { PropsWithChildren } from "react";
import { withTheme } from '../ThemeProvider/ThemeProvider';

export type BoxProps = ThemeProp & React.HTMLProps<HTMLDivElement> & {
    color?: keyof Theme['colors'];
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
  margin: ${props => props.m in props.theme.space ? props.theme.space[props.m] : ''};
  background: ${props => props.color in props.theme.gradients ? props.theme.gradients[props.color] : ''};
`)

export default Box;
