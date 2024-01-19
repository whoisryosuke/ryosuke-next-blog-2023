export function getImageThumbnail(src) {
  const extension = src.split(".").pop();
  const filename = src.replace(extension, `-150px${extension}`);

  return filename;
}
