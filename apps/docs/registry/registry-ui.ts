import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "button",
    type: "registry:ui",
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react", "lucide-react"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "kbd",
    type: "registry:ui",
    files: [
      {
        path: "ui/kbd.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "number-input",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/number-input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toggle",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toolbar",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/toolbar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox-group",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/checkbox-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "preview-card",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/preview-card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "progress",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/progress.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "collapsible",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scroll-area",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/slider.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "label",
    type: "registry:ui",
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/toggle-group.tsx",
        type: "registry:ui",
      },
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "skeleton",
    type: "registry:ui",
    files: [
      {
        path: "ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "--animate-skeleton-shimmer": "shimmer 3s infinite ease-out",
        "--animate-skeleton-gradient": "skeleton-gradient 3s infinite ease-out",
      },
    },
    css: {
      "@keyframes skeleton-shimmer": {
        "0%": {
          transform: "translateX(-100%);",
        },
        "100%": {
          transform: "translateX(200%);",
        },
      },
      "@keyframes skeleton-gradient": {
        "0%, 100%": {
          "background-position": "0% 50%",
        },
        "100%": {
          "background-position": "100% 50%",
        },
      },
    },
  },
  {
    name: "meter",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    files: [
      {
        path: "ui/meter.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toast",
    type: "registry:ui",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["https://clippkit.com/r/button"],
    files: [
      {
        path: "ui/toast.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "textarea",
    type: "registry:ui",
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
  },
];
