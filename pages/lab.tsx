import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import Text from "@components/dom/Text/Text";
import React from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import GlassBordered from "@components/dom/Glass/GlassBordered";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import {MdHomeFilled} from "react-icons/md"
import { useAppStore } from "store/app";
import { Theme } from "@theme/index";

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Canvas = dynamic(() => import("@components/3d/Canvas"), {
  ssr: false,
});
const Scene = dynamic(() => import("@components/3d/Scene"), {
  ssr: false,
});
const Shader = dynamic(
  () => import("@components/3d/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

export default function LabPage() {
  const { customizations, setUserTheme } = useAppStore();

  const fontWeightProps = customizations.theme.fontWeights;

  const handleWeightChangeRegular = (e: React.FormEvent<HTMLInputElement>) => {
    handleWeightChange(e, 'regular');
  }

  const handleWeightChangeBold = (e: React.FormEvent<HTMLInputElement>) => {
    handleWeightChange(e, 'bold');
  }

  const handleWeightChange = (e: React.FormEvent<HTMLInputElement>, type: keyof Theme['fontWeights']) => {
    setUserTheme({
      fontWeights: {
        ...customizations.theme.fontWeights,
        [type]: e.currentTarget.value,
      }
    })
  }

  return (
    <Page title="Laboratory">
        {/* <Box backgroundImage="url(./images/room1.png)" backgroundSize="cover" backgroundPosition="bottom center" minHeight="100vh" width="100%" zIndex={-2} position={"absolute"} top={0} left={0} /> */}
        <Box minHeight="100vh" width="100%" position="absolute" top="0" left="0" zIndex={-420}>
          <Canvas shadows camera={{ position: [0, 0, 30], fov: 50 }} style={{height: "100vh"}}>
            <Scene customizations={customizations} />
          </Canvas>
        </Box>
        <Box minHeight="100vh" width="100%">
            <Box width="800px" margin="auto" p={3}>
                <Stack vertical>
                    <Glass p={3}>
                        <Stack>
                            <Button>Blog</Button>
                            <Button>About Me</Button>
                        </Stack></Glass>
                    <GlassBordered p={'12px'}>
                        <Stack>
                            <Button>Blog</Button>
                            <Button>About Me</Button>
                        </Stack>
                    </GlassBordered>
                    <Glass p={3}>
                        <Stack>
                            <IconButton color="textInverted"><MdHomeFilled /></IconButton>
                        </Stack>
                      </Glass>
                    <GlassBordered p={3} transparent>
                        <Stack>
                            <Button icon iconSize={{width: '64px', height: '64px'}}><MdHomeFilled /></Button>
                            <Button icon><MdHomeFilled /></Button>
                        </Stack>
                    </GlassBordered>
                    
                    <Glass p={5} blur={3}><Text color="textInverted">Long text</Text></Glass>
                    <Glass p={5} blur={3}>
                      <Text color="textInverted" fontSize={6} lineHeight={7}>Regular: {fontWeightProps.regular}</Text>
                      <input type="range" id="volume" name="volume" value={customizations.theme.fontWeights.regular} min="100" max="900" step="1" onChange={handleWeightChangeRegular} />
                      <Text color="textInverted" fontWeight="bold" fontSize={6} lineHeight={7}>Bold: {fontWeightProps.bold}</Text>
                      <input type="range" id="volume" name="volume" value={customizations.theme.fontWeights.bold} min="100" max="900" step="1" onChange={handleWeightChangeBold} />
                    </Glass>
                </Stack>
            </Box>
        </Box>
    </Page>
  );
}
