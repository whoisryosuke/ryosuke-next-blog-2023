import Text from "@components/dom/Text/Text";
import React, { useState } from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import {
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
import ScrollBox from "@components/dom/ScrollBox/ScrollBox";
import WindowHeader from "@components/dom/WindowHeader/WindowHeader";
import PageWrapper from "@components/dom/PageWrapper/PageWrapper";

const MusicCard = ({
  src = "/playlist/baby-gravy.jpg",
  title,
  subtitle,
  ...props
}) => {
  return (
    <Box {...props}>
      <Image src={src} alt="Baby Gravy" mb={1} />
      <Text fontSize={1} fontWeight="bold" mb={1}>
        {title}
      </Text>
      <Text fontSize={0} color="textOverlay">
        {subtitle}
      </Text>
    </Box>
  );
};

export default function ComponentsPage() {
  const { customizations, setUserTheme, toggleModal } = useAppStore();

  const handleModal = () => {
    toggleModal(true);
  };

  const onClose = () => {
    toggleModal(false);
  };

  return (
    <PageWrapper>
      <Box width="80%" maxWidth="1200px" margin="auto" py={8}>
        <Glass id="playlist" blur={3} overflow="hidden">
          <Stack>
            <Box
              id="sidebar"
              width="250px"
              bg="rgba(0,0,0,0.2)"
              p={4}
              m={"1px"}
              borderTopLeftRadius={18}
              borderBottomLeftRadius={18}
            >
              <WindowHeader
                title="Library"
                subtitle="All Music"
                icon={<BiDotsHorizontal />}
                sidebar
              />

              <Stack vertical>
                <Button
                  icon={<BiTime />}
                  justifyContent="flex-start"
                  borderRadius={1}
                >
                  Recently Added
                </Button>
                <Button
                  icon={<BiBong />}
                  justifyContent="flex-start"
                  borderRadius={1}
                >
                  Artists
                </Button>
                <Button
                  icon={<BiFolder />}
                  justifyContent="flex-start"
                  borderRadius={1}
                >
                  Albums
                </Button>
                <Button
                  icon={<BiMusic />}
                  justifyContent="flex-start"
                  borderRadius={1}
                >
                  Songs
                </Button>
                <Button
                  icon={<BiUser />}
                  justifyContent="flex-start"
                  borderRadius={1}
                >
                  Made For You
                </Button>
              </Stack>
            </Box>
            <Box id="content" py={4} px={5} flex={1}>
              <WindowHeader
                title="Playlists"
                subtitle="420 songs"
                icon={<BiDotsHorizontal />}
              />

              <Box mb={5}>
                <Input icon={<BiMicrophone />} placeholder="Search for songs" />
              </Box>

              <ScrollBox height="400px">
                <Grid>
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                  <MusicCard
                    title="Eat Ya Veggies"
                    subtitle="Bbno$"
                    src="/playlist/bbno-eat-ya-veggies.jpg"
                  />
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                  <MusicCard
                    title="Eat Ya Veggies"
                    subtitle="Bbno$"
                    src="/playlist/bbno-eat-ya-veggies.jpg"
                  />
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />

                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                  <MusicCard
                    title="Eat Ya Veggies"
                    subtitle="Bbno$"
                    src="/playlist/bbno-eat-ya-veggies.jpg"
                  />
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                  <MusicCard
                    title="Eat Ya Veggies"
                    subtitle="Bbno$"
                    src="/playlist/bbno-eat-ya-veggies.jpg"
                  />
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />

                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                  <MusicCard
                    title="Eat Ya Veggies"
                    subtitle="Bbno$"
                    src="/playlist/bbno-eat-ya-veggies.jpg"
                  />
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                  <MusicCard
                    title="Eat Ya Veggies"
                    subtitle="Bbno$"
                    src="/playlist/bbno-eat-ya-veggies.jpg"
                  />
                  <MusicCard title="Baby Gravy" subtitle="Yung Gravy & Bbno$" />
                  <MusicCard
                    title="Bag or Die"
                    subtitle="Bbno$"
                    src="/playlist/bbno-bag-or-die.jpg"
                  />
                </Grid>
              </ScrollBox>
            </Box>
          </Stack>
        </Glass>
      </Box>
    </PageWrapper>
  );
}
