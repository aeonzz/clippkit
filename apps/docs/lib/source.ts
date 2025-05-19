import { createElement } from "react";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { icons } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  pageTree: {
    attachFile(node, file) {
      // Only modify if it's a file/page node
      if (file) {
        const originalName = node.name; // Preserve original string name for the span
        const additionalElement = (file.data.data as { new?: boolean })?.new
          ? createElement(
              Badge,
              { className: "ml-auto font-base text-xs", variant: "outline" },
              "New"
            )
          : null;

        node.name = createElement(
          "span",
          { className: "flex w-full gap-2 items-center" },
          createElement("span", null, originalName),
          additionalElement
        );
      }
      // If it's a folder (file is undefined), node.name remains a string.
      // Separators also don't have a 'file' and their 'name' should remain a string.
      return node;
    },
  },
});
