import fs from "node:fs";
import directory from "../settings/directory";
import path from "node:path";

export const checkDir = async (dirname: string, replace: boolean = false) => {
  if (!fs.existsSync(dirname)) {
    console.log("there is no such directory, so we are creating it");
    console.log("the path of the directory is: ", dirname);
    await fs.promises.mkdir(dirname);
    return true;
  } else if (!fs.statSync(dirname).isDirectory()) {
    console.log("there is such directory, but it's not a directory");
    console.log("the path of the directory is: ", dirname);
    if (replace) {
      await fs.promises.rmdir(dirname);
    }
    return false;
  } else {
    console.log("there is such directory and it's a directory");
    console.log("the path of the directory is: ", dirname);
    return true;
  }
};

export const checkFile = async (filename: string, replace: boolean = false) => {
  if (!fs.existsSync(filename)) {
    console.log("there is no such file, so we are creating it");
    console.log("the path of the file is: ", filename);
    await fs.promises.writeFile(filename, "");
    return true;
  } else if (!fs.statSync(filename).isFile()) {
    console.log("there is such file, but it's not a file");
    console.log("the path of the file is: ", filename);
    if (replace) {
      await fs.promises.unlink(filename);
    }
    return false;
  } else {
    console.log("there is such file and it's a file");
    console.log("the path of the file is: ", filename);
    return true;
  }
};

// export const project = (pathname: string) => {
//   return path.resolve(directory.root, pathname);
// };

export const project = (pathname: string) => {
  return dir(directory.root, pathname);
};

export const input = (pathname: string) => {
  return dir(directory.input, pathname);
};

export const dir = (dirname: string, pathname: string) => {
  return path.resolve(dirname, pathname);
};
