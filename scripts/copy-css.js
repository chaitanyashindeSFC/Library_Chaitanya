import fs from "fs";
import path from "path";

const srcDir = path.resolve("src/styles");
const distDir = path.resolve("dist/styles");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith(".css")) {
    fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
    console.log(`✅ Copied ${file} to dist/styles`);
  }
}

console.log("🎉 All CSS files copied successfully!");
