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
  {
    name: "u-circular-waveform",
    type: "registry:block",
    files: [
      {
        path: "blocks/circular-waveform/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/circular-waveform.tsx",
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
  {
    name: "u-linear-waveform",
    type: "registry:block",
    files: [
      {
        path: "blocks/linear-waveform/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/linear-waveform.tsx",
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
  {
    name: "u-card-flip",
    type: "registry:block",
    files: [
      {
        path: "blocks/card-flip/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/card-flip.tsx",
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
  {
    name: "u-floating-card",
    type: "registry:block",
    files: [
      {
        path: "blocks/floating-card/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/floating-card.tsx",
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
  {
    name: "u-toast-card",
    type: "registry:block",
    files: [
      {
        path: "blocks/toast-card/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/toast-card.tsx",
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
  {
    name: "u-bar-loader",
    type: "registry:block",
    files: [
      {
        path: "blocks/bar-loader/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/bar-loader.tsx",
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
  {
    name: "u-circular-loader",
    type: "registry:block",
    files: [
      {
        path: "blocks/circular-loader/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/circular-loader.tsx",
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
  {
    name: "u-screen-loader",
    type: "registry:block",
    files: [
      {
        path: "blocks/screen-loader/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/screen-loader.tsx",
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
  {
    name: "u-glitch-text",
    type: "registry:block",
    files: [
      {
        path: "blocks/glitch-text/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/glitch-text.tsx",
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
  {
    name: "u-popping-text",
    type: "registry:block",
    files: [
      {
        path: "blocks/popping-text/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/popping-text.tsx",
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
  {
    name: "u-sliding-text",
    type: "registry:block",
    files: [
      {
        path: "blocks/sliding-text/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/sliding-text.tsx",
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
  {
    name: "u-typing-text",
    type: "registry:block",
    files: [
      {
        path: "blocks/typing-text/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "components/typing-text.tsx",
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
