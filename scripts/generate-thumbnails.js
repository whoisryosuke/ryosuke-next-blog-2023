const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const { getImageThumbnail } = require("../utils/image");

function generateThumbnails() {
  const workRootPath = "./public/work/art";

  // Grab all the work folders
  const folders = fs.readdirSync(workRootPath);

  // Loop through all the folders and find the images
  folders.forEach((folder) => {
    const folderPath = path.join(workRootPath, folder);
    const files = fs.readdirSync(folderPath);
    console.log("files", files);

    files.forEach((fileName) => {
      const filePath = path.join(folderPath, fileName);
      const newFilePath = getImageThumbnail(filePath);
      const fileData = fs.readFileSync(filePath);
      // Process the images now
      sharp(fileData)
        .resize(250)
        .toFile(newFilePath, (err, info) => {
          console.error("Couldnt process image", err, info);
        });
    });
  });
}

generateThumbnails();
