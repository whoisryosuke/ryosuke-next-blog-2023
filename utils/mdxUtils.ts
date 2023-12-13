import fs from "fs";
import path from "path";

const getFiles = async (dir: string): Promise<string[]> => {
  // Are we client-side or something stupid NextJS requires? Check for fs.
  if (!fs || !("readdirSync" in fs)) return [];
  const folders = await fs.readdirSync(dir);

  const files = await folders.reduce<Promise<string[]>>(
    async (waitFiles, folder) => {
      // We have to await the accumulator here because function is async
      let allFiles = await waitFiles;
      // The full file path
      const fullPath = `${dir}/${folder}`;

      // Is it a folder? Recursively loop
      if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
        const folderFiles = await getFiles(fullPath);
        allFiles = [...allFiles, ...folderFiles];
      }
      // Only add MDX files
      if (/\.mdx?$/.test(folder)) {
        allFiles.push(fullPath);
      }
      return allFiles;
      // This should technically be a Promise wrapped array or something
      //@ts-ignore
    },
    Promise.resolve([])
  );

  //@ts-ignore
  return files;
};

const getPosts = async () => {
  const files = await getFiles(POSTS_PATH);
  return files;
};

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = async () => await getPosts();
