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
import IconButton from "@components/dom/IconButton/IconButton";
import {MdHomeFilled} from "react-icons/md"

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Canvas = dynamic(() => import("@components/3d/Canvas"), {
  ssr: false,
});
const Shader = dynamic(
  () => import("@components/3d/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

export default function LabPage() {
  return (
    <Page>
        <Box backgroundImage="url(./images/room1.png)" backgroundSize="cover" backgroundPosition="bottom center" minHeight="100vh" width="100%" zIndex={-2} position={"absolute"} top={0} left={0} />
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
                            <IconButton color="textInverted"><MdHomeFilled /></IconButton>
                            <IconButton color="textInverted"><MdHomeFilled /></IconButton>
                        </Stack>
                    </GlassBordered>
                    
                    <GlassBordered p={5} blur={3}><Text color="textInverted">Long text</Text></GlassBordered>
                </Stack>
            </Box>
        </Box>
    </Page>
  );
}