const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const { getImageThumbnail, THUMBNAIL_SIZE } = require("../utils/image");

const FORCE_THUMBNAIL_REGEN = false;

function generateThumbnails() {
  const workRootPath = "./public/work/art";

  // Grab all the work folders
  const folders = fs.readdirSync(workRootPath);

  // Loop through all the folders and find the images
  folders.forEach((folder) => {
    const folderPath = path.join(workRootPath, folder);
    const allFiles = fs.readdirSync(folderPath);

    // Filter only images we want to resize
    // Also filter out any thumbnails
    const files = allFiles.filter(
      (file) =>
        (file.includes("jpg") || file.includes("png")) &&
        !file.includes(`${THUMBNAIL_SIZE}px`)
    );
    console.log("files", files);

    // Loop through each file and generate thumbnail
    files.forEach((fileName) => {
      const filePath = path.join(folderPath, fileName);
      const thumbnailPath = getImageThumbnail(filePath);
      const fileData = fs.readFileSync(filePath);

      // Check if thumbnail exists
      const thumbnailExists = fs.existsSync(thumbnailPath);
      if (thumbnailExists && !FORCE_THUMBNAIL_REGEN) return;

      console.log("processing image", fileName);
      // Process the images now
      sharp(fileData)
        .resize(THUMBNAIL_SIZE)
        .toFile(thumbnailPath, (err, info) => {
          if (err) console.error("Couldnt process image", fileName, info);
        });
    });
  });
}

generateThumbnails();
