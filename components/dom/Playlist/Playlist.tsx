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
  BiShare,
  BiSolidKeyboard,
  BiStreetView,
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
import { MusicData, PLAYLIST_DATA } from "content/playlist";
import Head from "../Head/Head";

type MusicCardProps = MusicData;

const MusicCard = ({
  coverArt = "/playlist/baby-gravy.jpg",
  artist,
  album,
  url = "#",
  ...props
}: MusicCardProps) => {
  return (
    <Box as="a" href={url} style={{ textDecoration: "none" }} {...props}>
      <Image src={coverArt} alt="Baby Gravy" mb={3} />
      <Text
        display="block"
        fontSize={1}
        lineHeight={1}
        fontWeight="bold"
        mb={1}
      >
        {album}
      </Text>
      <Text display="block" fontSize={0} lineHeight={1} color="textOverlay">
        {artist}
      </Text>
    </Box>
  );
};

const SidebarButton = ({ icon, href, children }) => {
  return (
    <Button
      as="a"
      //@ts-ignore
      href={href}
      //@ts-ignore
      target="_blank"
      icon={icon}
      iconSize={{
        width: "16px",
        height: "16px",
      }}
      justifyContent="flex-start"
      borderRadius={1}
      fontSize={1}
    >
      {children}
    </Button>
  );
};

export default function Playlist() {
  const { customizations, setUserTheme, toggleModal } = useAppStore();
  const [search, setSearch] = useState("");

  const handleModal = () => {
    toggleModal(true);
  };

  const onClose = () => {
    toggleModal(false);
  };

  const shareMenu = () => {
    window?.navigator?.share({
      url: "https://whoisryosuke.com/playlist",
      // title: "Ryosuke's Music Playlist",
      text: "Ryosuke's Music Playlist",
    });
  };

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  // We filter the music by search term
  // we also make everything lowercase to make matching easier
  const filteredMusic =
    search == ""
      ? PLAYLIST_DATA
      : PLAYLIST_DATA.filter(
          (musicData) =>
            musicData.album.toLowerCase().includes(search.toLowerCase()) ||
            musicData.artist.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <PageWrapper>
      <Head title="Ryosuke's Playlist" />
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
              display={{
                default: "none",
                tablet: "block",
              }}
            >
              <WindowHeader
                title="Library"
                subtitle="Playlists"
                // icon={<BiDotsHorizontal />}
                sidebar
              />

              <Stack vertical>
                <SidebarButton
                  href="https://open.spotify.com/playlist/37i9dQZF1Fa1IIVtEpGUcU?si=f7d9592ffea04ac0"
                  icon={<BiTime />}
                >
                  Top Songs of 2023
                </SidebarButton>
                <SidebarButton
                  href="https://open.spotify.com/playlist/2v6uB0Xad10mOlYjTp8p5G?si=4044d939578a49de"
                  icon={<BiMusic />}
                >
                  Metal Mix
                </SidebarButton>
                <SidebarButton
                  href="https://open.spotify.com/playlist/7x8A9yJKiaOwqBIeVIYTla?si=3b0eabfabfbb456b"
                  icon={<BiMicrophone />}
                >
                  Energy Pop Mix
                </SidebarButton>
                <SidebarButton
                  href="https://open.spotify.com/playlist/4xlFkq5lcsqPBdhLCLhHgR?si=4331d40a9b5a4780"
                  icon={<BiSolidKeyboard />}
                >
                  Energy Electric
                </SidebarButton>
                <SidebarButton
                  href="https://open.spotify.com/playlist/3Y0UDJgT8RhIDOEqRFogLg?si=d2fb0c831bba40a9"
                  icon={<BiUser />}
                >
                  Skateboarding Music
                </SidebarButton>
              </Stack>
            </Box>
            <Box id="content" py={4} px={5} flex={1}>
              <WindowHeader
                title="Music"
                subtitle={`${filteredMusic.length} albums`}
                icon={<BiShare />}
                buttonPress={shareMenu}
              />

              <Box mb={5}>
                <Input
                  icon={<BiMicrophone />}
                  placeholder="Search for album or artist"
                  value={search}
                  onChange={handleSearchInput}
                />
              </Box>

              <ScrollBox height="400px">
                <Grid>
                  {filteredMusic.map((playlistItem) => (
                    <MusicCard {...playlistItem} />
                  ))}
                </Grid>
              </ScrollBox>
            </Box>
          </Stack>
        </Glass>
      </Box>
    </PageWrapper>
  );
}
