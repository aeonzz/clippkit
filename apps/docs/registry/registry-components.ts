import type { Registry } from "./schema";

export const components: Registry = [
  {
    name: "bar-waveform",
    type: "registry:component",
    dependencies: ["remotion", "@remotion/media-utils"],
    files: [
      {
        path: "components/bar-waveform.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "circular-waveform",
    type: "registry:component",
    dependencies: ["remotion", "@remotion/media-utils"],
    files: [
      {
        path: "components/circular-waveform.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "linear-waveform",
    type: "registry:component",
    dependencies: ["remotion", "@remotion/media-utils"],
    files: [
      {
        path: "components/linear-waveform.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "card-flip",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/card-flip.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "floating-card",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/floating-card.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "toast-card",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/toast-card.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "bar-loader",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/bar-loader.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "circular-loader",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/circular-loader.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "screen-loader",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/screen-loader.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "glitch-text",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/glitch-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "popping-text",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/popping-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sliding-text",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/sliding-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "typing-text",
    type: "registry:component",
    dependencies: ["remotion"],
    files: [
      {
        path: "components/typing-text.tsx",
        type: "registry:component",
      },
    ],
  },
];
