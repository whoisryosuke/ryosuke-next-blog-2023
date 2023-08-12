import React from 'react'
import styled from 'styled-components'
import Box from '../Box/Box'
import { Theme } from '@theme/index';

type GlassProps = {
    transparent?: boolean;
    blur?: keyof Theme['blur'];
}

const Glass = styled(Box)<GlassProps>`
    background: ${({theme, transparent}) => !transparent && theme.colors.glass};
    backdrop-filter: blur(${({theme, blur}) => theme.blur[blur]});
    /* -webkit-backdrop-filter: blur( 20px ); */
    border-radius: 30px;
    /* border: 0.0625em solid rgba( 255, 255, 255, 0.18 ); */

    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    box-shadow: 0 2px 16px 0 rgba( 10,10,14, 0.1 );

    /* Border gradient - also an inset for extra "gloss effect" */
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -2;
        margin: -1px -1px 0 -1px;
        border-radius: inherit;
        background: ${({theme}) => theme.colors.glass};
        box-shadow: inset 1px 1px 1px rgba(255,255,255,0.35);
    }
`

export default Glass

Glass.defaultProps = {
    blur: 1,
}