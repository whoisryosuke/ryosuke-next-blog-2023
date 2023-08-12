import React from 'react'
import styled from 'styled-components'
import Box from '../Box/Box'

type GlassProps = {

}

const Glass = styled(Box)<GlassProps>`
    background: ${({theme}) => theme.colors.glass};
    backdrop-filter: blur( 26px );
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
        margin: -2px -1px 0 -2px;
        border-radius: inherit;
        background: ${({theme}) => theme.colors.glass};
        box-shadow: inset 2px 2px 2px rgba(255,255,255,0.25);
    }
`

export default Glass