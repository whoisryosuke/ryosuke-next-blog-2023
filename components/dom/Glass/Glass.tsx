import React from 'react'
import styled from 'styled-components'

type GlassProps = {

}

const Glass = styled('div')<GlassProps>`
    background: ${({theme}) => theme.colors.glass};
    backdrop-filter: blur( 26px );
    /* -webkit-backdrop-filter: blur( 20px ); */
    border-radius: 30px;
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */

    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */

    mix-blend-mode: multiply;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -10px;
        border-radius: inherit;
        background: ${({theme}) => theme.gradients.glass.border};
    }
`

export default Glass