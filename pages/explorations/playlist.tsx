import Text from "@components/dom/Text/Text";
import React, { useState } from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import {
  BiHomeAlt,
  BiBook,
  BiLogoMastodon,
  BiGhost,
  BiHeadphone,
  BiDotsHorizontal,
  BiMusic,
  BiMicrophone,
  BiTime,
  BiFolder,
  BiBong,
  BiUser,
} from "react-icons/bi";
import { useAppStore } from "store/app";
import ToastManager from "@components/dom/Toasts/ToastManager";
import Modal from "@components/dom/Modal/Modal";
import Headline from "@components/dom/Headline/Headline";
import Input from "@components/dom/Input/Input";
import Image from "@components/dom/Image/Image";
import Grid from "@components/dom/Grid/Grid";

type WindowHeaderProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactElement;
  sidebar?: boolean;
}

const WindowHeader = ({title, subtitle, icon, sidebar}: WindowHeaderProps) => {
  return (
    <Stack mb={4} p={3} alignItems="flex-start">
        <Box flex={1}>
            <Headline mb={4}>{title}</Headline>
            <Text color={sidebar && "textOverlay"}>{subtitle}</Text>
        </Box>
        {icon && <Button icon={icon} onlyIcon solid />}
    </Stack>
  )
}

const MusicCard = ({src = "/playlist/baby-gravy.jpg", title, subtitle, ...props}) => {
  return (
    <Box {...props}>
      <Image src={src} alt="Baby Gravy" mb={1} />
      <Text fontSize={1} fontWeight="bold" mb={1}>{title}</Text>
      <Text fontSize={0} color="textOverlay">{subtitle}</Text>
    </Box>
  )
}

export default function ComponentsPage() {
  const { customizations, setUserTheme, toggleModal } = useAppStore();

  const handleModal = () => {
    toggleModal(true);
  }

  const onClose = () => {
    toggleModal(false);
  }

  return (
    <>
      <Box
        backgroundImage="url(/images/room1.png)"
        backgroundSize="cover"
        backgroundPosition="bottom center"
        minHeight="100vh"
        width="100%"
        zIndex={-420}
        position={"absolute"}
        top={0}
        left={0}
        style={{ filter: "blur(1.5rem)" }}
      />
      <Box
        background="rgba(0,0,0,0.3)"
        minHeight="100vh"
        width="100%"
        zIndex={-419}
        position={"absolute"}
        top={0}
        left={0}
      />

      <Box minHeight="100vh" width="100%">
        <Box width="800px" margin="auto" py={8}>
            <Glass id="playlist" overflow="hidden">
                <Stack>
                    <Box id="sidebar" width="250px" bg="rgba(0,0,0,0.2)" p={4}>
                        <WindowHeader title="Library" subtitle="All Music" icon={<BiDotsHorizontal />} sidebar />

                        <Stack vertical>
                            <Button icon={<BiTime />} justifyContent="flex-start" borderRadius={1}>Recently Added</Button>
                            <Button icon={<BiBong />} justifyContent="flex-start" borderRadius={1}>Artists</Button>
                            <Button icon={<BiFolder />} justifyContent="flex-start" borderRadius={1}>Albums</Button>
                            <Button icon={<BiMusic />} justifyContent="flex-start" borderRadius={1}>Songs</Button>
                            <Button icon={<BiUser />} justifyContent="flex-start" borderRadius={1}>Made For You</Button>
                        </Stack>
                    </Box>
                    <Box id="content" py={4} px={5} flex={1}>
                        <WindowHeader title="Playlists" subtitle="420 songs" icon={<BiDotsHorizontal />} />

                        <Box mb={5}>
                          <Input icon={<BiMicrophone />} placeholder="Search for songs" />
                        </Box>

                        <Grid>
                          <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                          <MusicCard title="Bag or Die" subtitle="Bbno$" src="/playlist/bbno-bag-or-die.jpg" />
                          <MusicCard title="Eat Ya Veggies" subtitle="Bbno$" src="/playlist/bbno-eat-ya-veggies.jpg" />
                          <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                          <MusicCard title="Bag or Die" subtitle="Bbno$" src="/playlist/bbno-bag-or-die.jpg" />
                          <MusicCard title="Eat Ya Veggies" subtitle="Bbno$" src="/playlist/bbno-eat-ya-veggies.jpg" />
                          <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                          <MusicCard title="Bag or Die" subtitle="Bbno$" src="/playlist/bbno-bag-or-die.jpg" />
                        </Grid>
                    </Box>
                </Stack>
            </Glass>
        </Box>
      </Box>
    </>
  );
}
