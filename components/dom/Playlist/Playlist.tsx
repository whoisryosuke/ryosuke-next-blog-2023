import Box from "@/components/Box/Box";
import React, { useState } from "react";
import Text from "@/components/Text/Text";
import Stack from "@/components/Stack/Stack";
import Link from "@/components/Link/Link";
import PLAYLIST_DATA, { PLAYLIST_CATEGORIES } from "../../data/playlist";
import { playlistCategoryStyles } from "./Playlist.css";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const OPACITY_UNSELECTED = 0.5;

const Playlist = (props: Props) => {
  const [currentCategory, setCategory] = useState("all");

  const handleCategoryChange = (categoryId) => {
    setCategory(categoryId);
    console.log("category changed", categoryId);
  };

  const opacity = currentCategory === "all" ? 1 : OPACITY_UNSELECTED;

  const filteredPlaylist =
    currentCategory === "all"
      ? PLAYLIST_DATA
      : PLAYLIST_DATA.filter(
          (playlist) =>
            playlist.category === PLAYLIST_CATEGORIES[currentCategory],
        );
  return (
    <>
      <Box mb={8}>
        <Text as="h1" fontFamily="heading" fontSize={6}>
          Playlist
        </Text>
      </Box>
      <Box mb={4}>
        <Stack style={{ alignItems: "center" }}>
          <Box>
            <Text>Sort by</Text>
          </Box>
          <button
            onClick={() => handleCategoryChange("all")}
            className={playlistCategoryStyles}
            style={{ opacity }}
          >
            <Text as="h3" fontFamily="heading" fontSize={2}>
              All
            </Text>
          </button>

          {Object.entries(PLAYLIST_CATEGORIES as Record<string, string>).map(
            ([key, value]) => (
              <button
                key={value}
                onClick={() => handleCategoryChange(key)}
                className={playlistCategoryStyles}
                style={{
                  opacity: currentCategory === key ? 1 : OPACITY_UNSELECTED,
                }}
              >
                <Text as="h3" fontFamily="heading" fontSize={2}>
                  {value}
                </Text>
              </button>
            ),
          )}
        </Stack>
      </Box>
      <Stack vertical>
        <AnimatePresence>
          {filteredPlaylist.map((playlist) => (
            <motion.div
              key={playlist.song}
              initial={{ opacity: 0, translateX: "-1rem" }}
              animate={{ opacity: 1, translateX: "0" }}
              exit={{ opacity: 0, translateX: "-1rem" }}
            >
              <Link
                href={playlist.url}
                underline={false}
                style={{ width: "100%" }}
                target="_blank"
              >
                <Box
                  style={{
                    borderBottom: "1px solid #CCC",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box style={{ display: "flex" }}>
                    <Text
                      fontFamily="heading"
                      fontSize={2}
                      lineHeight={3}
                      fontWeight="bold"
                    >
                      {playlist.artist}{" "}
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize={2}
                      lineHeight={3}
                      style={{ marginLeft: "8px" }}
                    >
                      - {playlist.song}
                    </Text>
                  </Box>
                  <Text>{playlist.category}</Text>
                </Box>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>
    </>
  );
};

export default Playlist;
