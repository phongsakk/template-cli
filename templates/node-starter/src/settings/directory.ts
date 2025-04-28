import path from "node:path";

export default {
    root: path.resolve(process.cwd(), ""),
    src: path.resolve(process.cwd(), "src"),
    input: path.resolve(process.cwd(), ".input"),
    output: path.resolve(process.cwd(), ".output"),
    envDir: path.join(process.cwd(), ".env"),
}