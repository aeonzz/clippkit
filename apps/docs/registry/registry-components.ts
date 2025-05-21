import type { Registry } from "./schema";

export const components: Registry = [
  {
    name: "popping-text",
    type: "registry:component",
    files: [
      {
        path: "ui/popping-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "glitch-text",
    type: "registry:component",
    files: [
      {
        path: "ui/glitch-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "typing-text",
    type: "registry:component",
    files: [
      {
        path: "ui/typing-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "card-flip",
    type: "registry:component",
    files: [
      {
        path: "ui/card-flip.tsx",
        type: "registry:component",
      },
    ],
  },
];
