import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import Test from "@components/Test";
import React from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import GlassBordered from "@components/dom/Glass/GlassBordered";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";

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
        <Box backgroundImage="url(./images/room1.png)" backgroundSize="cover" backgroundPosition="bottom center" minHeight="100vh" width="100%">
            <Box width="800px" margin="auto" p={3}>
                <Stack vertical>
                    <Glass><Box p={3}>Test</Box></Glass>
                    <GlassBordered p={3}>
                        <Stack>
                            <Button>Blog</Button>
                            <Button>About Me</Button>
                        </Stack>
                    </GlassBordered>
                </Stack>
            </Box>
        </Box>
    </Page>
  );
}
