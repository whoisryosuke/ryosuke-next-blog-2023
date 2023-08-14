import React from 'react'
import styled from 'styled-components'
import Box from '../Box/Box'
import { Theme } from '@theme/index';

type GlassProps = {
    transparent?: boolean;
    blur?: keyof Theme['blur'];
}

const GlassBorder = styled('div')<GlassProps>`
    background: ${({theme}) => theme.gradients.glass.border};
    padding: 0.0625em; 
    border-radius: 32px;
`

const GlassInterior = styled(Box)<GlassProps>`
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */


    /* The actual BG. Since it uses "inner" Box Shadow */
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-radius: 30px;
        background: ${({theme, transparent}) => !transparent && theme.colors.glass};
        backdrop-filter: blur(${({theme, blur}) => theme.blur.radius[blur]});
        /* -webkit-backdrop-filter: blur( 20px ); */
        box-shadow: inset 2px 2px 2px rgba(255,255,255,0.25);
    }

    box-shadow: 0 2px 16px 0 rgba( 10,10,14, 0.1 );
`

const GlassBordered = ({children, ...props}) => {
    return(
        <GlassBorder>
            <GlassInterior {...props}>
                {children}
            </GlassInterior>
        </GlassBorder>
    )
}

export default GlassBordered

GlassBordered.defaultProps = {
    blur: 1,
}