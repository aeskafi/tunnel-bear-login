import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const imgDir = path.join(rootDir, "src/assets/img");

describe("🐻 TunnelBear Login Studio Test Suite", () => {
  describe("1. Bear Asset Sprite Frames", () => {
    it("should contain all 21 watch_bear animation frames", async () => {
      for (let i = 0; i <= 20; i++) {
        const filePath = path.join(imgDir, `watch_bear_${i}.png`);
        const stat = await fs.stat(filePath);
        assert.ok(stat.size > 0, `watch_bear_${i}.png should not be empty`);
      }
    });

    it("should contain all 6 hide_bear animation frames", async () => {
      for (let i = 0; i <= 5; i++) {
        const filePath = path.join(imgDir, `hide_bear_${i}.png`);
        const stat = await fs.stat(filePath);
        assert.ok(stat.size > 0, `hide_bear_${i}.png should not be empty`);
      }
    });
  });

  describe("2. Production Build Integrity", () => {
    it("should have index.html in dist/", async () => {
      const indexPath = path.join(rootDir, "dist/index.html");
      const content = await fs.readFile(indexPath, "utf-8");
      assert.ok(content.includes("TunnelBear"), "Dist index.html should contain TunnelBear");
    });

    it("should have bundled CSS and JS assets in dist/assets/", async () => {
      const assetsDir = path.join(rootDir, "dist/assets");
      const files = await fs.readdir(assetsDir);
      assert.ok(files.some((f) => f.endsWith(".js")), "Dist should contain bundled JS");
      assert.ok(files.some((f) => f.endsWith(".css")), "Dist should contain bundled CSS");
    });
  });
});
