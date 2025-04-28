import fs from "node:fs";
import { promisify } from "node:util";

export const fileContent = async (fullpath: string) => {
  const readFile = promisify(fs.readFile);
  return await readFile(fullpath, "utf8");
};
