import { styled } from '@linaria/react';
import { Theme, ThemeProp } from '@theme/index';
import { PropsWithChildren } from "react";

export type BoxProps = ThemeProp & React.HTMLProps<HTMLDivElement> & {
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
  
const Box = styled.div<BoxProps>`
  margin: ${props => {
    console.log('test', props)
  }};
`

export default Box;
