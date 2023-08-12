import React from 'react'
import styled from 'styled-components'
import Box from '../Box/Box'

type GlassProps = {

}

const GlassBorder = styled('div')<GlassProps>`
    background: ${({theme}) => theme.gradients.glass.border};
    padding: 2px;
    border-radius: 32px;
`

const GlassInterior = styled(Box)<GlassProps>`
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */


    /* The actual BG. Since it uses CSS Blend Mode, 
    it has to be separate element or content would be obscured */
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        border-radius: 30px;
        background: ${({theme}) => theme.colors.glass};
        backdrop-filter: blur( 26px );
        /* -webkit-backdrop-filter: blur( 20px ); */

        mix-blend-mode: multiply;
    }

    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
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