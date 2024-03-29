import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import Text from "@components/dom/Text/Text";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useRef,
  useState,
} from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import GlassBordered from "@components/dom/Glass/GlassBordered";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import { MdHomeFilled } from "react-icons/md";
import { useAppStore } from "store/app";
import { Theme } from "@theme/index";
import { styled } from "styled-components";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { MathUtils, PerspectiveCamera as ThreePerspectiveCamera } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Canvas = dynamic(() => import("@components/3d/Canvas"), {
  ssr: false,
});
const PrimitiveScene = dynamic(
  () => import("@components/3d/PrimitiveScene/PrimitiveScene"),
  {
    ssr: false,
  }
);
const Shader = dynamic(
  () => import("@components/3d/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

type NavigationProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  right?: boolean;
};

// Navigation
const Navigation = styled("button")<NavigationProps>`
  position: absolute;
  top: 0;
  ${({ right }) => (right ? `right: 0;` : `left:0;`)}
  z-index: 710;

  width: 100px;
  height: 100vh;

  border: 0;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

// Perspective Container
type PerspectiveContainerProps = {
  tilt?: "left" | "right";
};

const TILT_RIGHT = "translateZ(100px) rotateX(1.11deg) rotateY(17.94deg)";
const TILT_LEFT = "translateZ(100px) rotateX(1.4175deg) rotateY(-17.97deg)";

const StyledPerspectiveContainer = styled(Box)<PerspectiveContainerProps>`
  transform: ${({ tilt }) => (tilt == "left" ? TILT_LEFT : TILT_RIGHT)};
  scroll-snap-align: center;

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: transform;
    transition-duration: 710ms;
  }
`;

StyledPerspectiveContainer.defaultProps = {
  tilt: "right",
};

const PerspectiveContainer = ({
  children,
  id,
  syncLocation,
  focusScroll,
  ...props
}) => {
  // const ref = useRef<HTMLDivElement>();
  const { ref, focusKey, focusSelf, hasFocusedChild, focused } = useFocusable({
    trackChildren: true,
  });

  useEffect(() => {
    const location = ref.current.getBoundingClientRect();
    syncLocation(id, location);
  }, [ref.current]);

  useEffect(() => {
    if (hasFocusedChild) {
      focusScroll();
    }
  }, [hasFocusedChild]);

  return (
    <FocusContext.Provider value={focusKey}>
      <StyledPerspectiveContainer ref={ref} {...props}>
        {children}
      </StyledPerspectiveContainer>
    </FocusContext.Provider>
  );
};

type AnimatedCameraProps = {
  rotate: number;
};

const AnimatedCamera = ({ rotate }: AnimatedCameraProps) => {
  const cameraRef = useRef<ThreePerspectiveCamera>();

  useFrame((state) => {
    // HERE, looking for a way to lerp camera lookAt in a way that can toggle.
    // cameraRef.current.rotateY(rotate);
    // cameraRef.current.rotateY(
    //   MathUtils.lerp(cameraRef.current.rotation.y, rotate, 0.25)
    // );
    cameraRef.current.rotation.y = MathUtils.lerp(
      cameraRef.current.rotation.y,
      rotate,
      0.025
    );
    cameraRef.current.updateProjectionMatrix();
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      zoom={1}
      near={1}
      far={2000}
      fov={75}
      position={[4, 2, 20]}
    />
  );
};

export default function LabPage() {
  const [focusedApp, setFocusedApp] = useState("app");
  const [containerLocations, setContainerLocations] = useState<
    Record<string, DOMRect>
  >({});
  const containerRef = useRef<HTMLDivElement>();
  const { customizations } = useAppStore();

  const syncLocation = (id, data: DOMRect) => {
    setContainerLocations((prevState) => ({
      ...prevState,
      [id]: data,
    }));
  };

  const handleNavModal = () => {
    setFocusedApp("modal");
    containerRef.current.scrollTo({
      top: containerLocations.modal.top,
      left: containerLocations.modal.left,
    });
  };

  const handleNavApp = () => {
    setFocusedApp("app");
    containerRef.current.scrollTo({
      top: containerLocations.app.top,
      left: containerLocations.app.left,
    });
  };

  return (
    <>
      {/* <Box backgroundImage="url(./images/room1.png)" backgroundSize="cover" backgroundPosition="bottom center" minHeight="100vh" width="100%" zIndex={-2} position={"absolute"} top={0} left={0} /> */}
      <Box
        minHeight="100vh"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={-420}
      >
        <Canvas
          shadows
          // camera={{ position: [0, 0, 30], fov: 50 }}
          style={{ height: "100vh" }}
        >
          <PrimitiveScene
            customizations={customizations}
            rotate={focusedApp === "app" ? Math.PI / 12 : Math.PI / 8}
          />
        </Canvas>
      </Box>
      <Box>
        <Navigation onClick={handleNavApp} />

        <Box
          ref={containerRef}
          minHeight="100vh"
          width="100%"
          overflowX="hidden"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Box
            width="200%"
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            pl={11}
            pt={8}
          >
            <PerspectiveContainer
              width="800px"
              p={3}
              // tilt={focusedApp === "app" ? "right" : "left"}
              id="app"
              syncLocation={syncLocation}
              focusScroll={handleNavApp}
            >
              <Stack vertical>
                <Glass p={3}>
                  <Stack>
                    <Button onClick={handleNavApp}>Blog</Button>
                    <Button onClick={handleNavModal}>About Me</Button>
                  </Stack>
                </Glass>
                <Glass p={5} blur={3} minHeight="30vh">
                  <Text color="textInverted">Long text</Text>
                </Glass>
              </Stack>
            </PerspectiveContainer>
            <PerspectiveContainer
              width="800px"
              p={3}
              // tilt={focusedApp === "modal" ? "right" : "left"}
              tilt="left"
              id="modal"
              syncLocation={syncLocation}
              focusScroll={handleNavModal}
            >
              <Stack vertical>
                <Glass p={3}>
                  <Stack>
                    <Button onClick={handleNavApp}>Blog</Button>
                    <Button onClick={handleNavModal}>About Me</Button>
                  </Stack>
                </Glass>
                <Glass p={5} blur={3}>
                  <Text color="textInverted">Long text</Text>
                </Glass>
              </Stack>
            </PerspectiveContainer>
          </Box>
        </Box>

        <Navigation right onClick={handleNavModal} />
      </Box>
    </>
  );
}
