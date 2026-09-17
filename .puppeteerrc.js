import { join } from "node:path";

export default {
  cacheDirectory: join(
    import.meta.dirname,
    ".cache",
    "puppeteer"
  ),
};