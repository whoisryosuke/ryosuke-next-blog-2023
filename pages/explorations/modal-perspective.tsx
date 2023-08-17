import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import Text from "@components/dom/Text/Text";
import React, { useEffect, useRef, useState } from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import GlassBordered from "@components/dom/Glass/GlassBordered";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import {MdHomeFilled} from "react-icons/md"
import { useAppStore } from "store/app";
import { Theme } from "@theme/index";
import { styled } from "styled-components";

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Canvas = dynamic(() => import("@components/3d/Canvas"), {
  ssr: false,
});
const PrimitiveScene = dynamic(() => import("@components/3d/PrimitiveScene/PrimitiveScene"), {
  ssr: false,
});
const Shader = dynamic(
  () => import("@components/3d/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

type PerspectiveContainerProps = {
    tilt?: 'left' | 'right';
}

const TILT_RIGHT = "translateZ(100px) rotateX(1.11deg) rotateY(17.94deg)"
const TILT_LEFT = "translateZ(100px) rotateX(1.4175deg) rotateY(-17.97deg)"

const StyledPerspectiveContainer = styled(Box)<PerspectiveContainerProps>`
    transform: ${({tilt}) => tilt == 'left' ? TILT_LEFT : TILT_RIGHT};
    scroll-snap-align: center;
`

StyledPerspectiveContainer.defaultProps = {
    tilt: 'right' 
}

const PerspectiveContainer = ({children, id, syncLocation, ...props}) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const location = ref.current.getBoundingClientRect();
    console.log('container location', location)
    syncLocation(id, location);
  }, [ref.current])
  

  return(
    <StyledPerspectiveContainer ref={ref} {...props}>{children}</StyledPerspectiveContainer>
  )
}

export default function LabPage() {
  const [focusedApp, setFocusedApp] = useState(0);
  const [containerLocations, setContainerLocations] = useState<Record<string, DOMRect>>({})
  const containerRef = useRef<HTMLDivElement>();
  const { customizations } = useAppStore();

  const syncLocation = (id, data: DOMRect) => {
    setContainerLocations((prevState) => ({
      ...prevState,
      [id]: data,
    }))
  }

  const handleNav = () => {
    containerRef.current.scrollTo({
      top: containerLocations.modal.top,
      left: containerLocations.modal.left,
    })
  }

  console.log('locations', containerLocations)

  return (
    <>
        {/* <Box backgroundImage="url(./images/room1.png)" backgroundSize="cover" backgroundPosition="bottom center" minHeight="100vh" width="100%" zIndex={-2} position={"absolute"} top={0} left={0} /> */}
        <Box minHeight="100vh" width="100%" position="absolute" top="0" left="0" zIndex={-420}>
          <Canvas shadows camera={{ position: [0, 0, 30], fov: 50 }} style={{height: "100vh"}}>
            <PrimitiveScene customizations={customizations} />
          </Canvas>
        </Box>
        <Box ref={containerRef} minHeight="100vh" width="100%" overflowX="hidden" style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
            }}>
            <Box width="200%" display="flex" flexDirection="row" justifyContent="flex-start" alignItems="flex-start" pl={11} pt={8}>
                <PerspectiveContainer width="800px" p={3} id="app" syncLocation={syncLocation}>
                    <Stack vertical>
                        <Glass p={3}>
                            <Stack>
                                <Button onClick={handleNav}>Blog</Button>
                                <Button onClick={handleNav}>About Me</Button>
                            </Stack></Glass>
                        <Glass p={5} blur={3} minHeight="30vh"><Text color="textInverted">Long text</Text></Glass>
                    </Stack>
                </PerspectiveContainer>
                <PerspectiveContainer width="800px" p={3} tilt="left" id="modal" syncLocation={syncLocation}>
                    <Glass p={5} blur={3}><Text color="textInverted">Long text</Text></Glass>
                </PerspectiveContainer>
            </Box>
        </Box>
    </>
  );
}
