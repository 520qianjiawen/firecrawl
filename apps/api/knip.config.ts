import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    ".": {
      entry: ["src/services/worker/**/*.ts", "src/services/**/*-worker.ts"],
      project: ["src/**/*.ts"],
    },
  },
  ignore: ["native/**"],
};

export default config;
