/**
 * Generate og-image.png from og-image.svg
 * Run with: node scripts/generate-og-image.mjs
 */

import sharp from "sharp";
import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

async function generateOgImage() {
  try {
    const svgPath = join(publicDir, "og-image.svg");
    const pngPath = join(publicDir, "og-image.png");

    console.log("Reading SVG from:", svgPath);
    const svgBuffer = await readFile(svgPath);

    console.log("Converting to PNG...");
    const pngBuffer = await sharp(svgBuffer)
      .resize(1200, 630)
      .png({ quality: 90 })
      .toBuffer();

    await writeFile(pngPath, pngBuffer);
    console.log("Generated og-image.png successfully at:", pngPath);
  } catch (error) {
    console.error("Error generating og-image:", error);
    process.exit(1);
  }
}

generateOgImage();
