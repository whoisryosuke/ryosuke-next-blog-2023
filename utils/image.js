const THUMBNAIL_SIZE = 200;
function getImageThumbnail(src) {
  const extension = src.split(".").pop();
  const fullExtension = `.${extension}`;
  const filename = src.replace(
    fullExtension,
    `-${THUMBNAIL_SIZE}px${fullExtension}`
  );

  return filename;
}

module.exports = {
  getImageThumbnail,
  THUMBNAIL_SIZE,
};
