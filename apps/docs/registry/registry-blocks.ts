import type { Registry } from "./schema";

export const blocks: Registry = [
  {
    name: "u-bar-waveform",
    type: "registry:block",
    files: [
      {
        path: "blocks/bar-waveform/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/bar-waveform.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-6 py-12 items-center md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
    },
  },
];
