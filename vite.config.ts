import * as path from "node:path"
import { defineConfig } from "vite";
import { partytownSnippet } from "@builder.io/partytown/integration";
import { partytownVite } from "@builder.io/partytown/utils";

export default defineConfig({
  plugins: [
    {
      name: "inject-partytown",
      transformIndexHtml(html) {
        return {
          html,
          tags: [{ tag: "script", children: partytownSnippet() }],
        };
      },
    },
    partytownVite({
      dest: path.join(__dirname, "dist"),
    }),
  ],
});
