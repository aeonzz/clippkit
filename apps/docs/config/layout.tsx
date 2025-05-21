import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Github } from "lucide-react";

import { source } from "@/lib/source";

import { siteConfig } from "./site";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/images/logos/logo-6.svg"
          alt="Logo"
          width="24"
          height="24"
          className="fill-foreground"
        />
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          {siteConfig.name}
        </span>
        <span className="bg-muted text-muted-foreground inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
          BETA
        </span>
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs/ui",
    },
    {
      text: "Components",
      url: "/docs/ui/text-elements/popping-text",
    },
    {
      type: "icon",
      url: siteConfig.links.github,
      text: "Github",
      icon: <Github className="size-4" aria-hidden="true" />,
      external: true,
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    tabs: false,
    className: "[&_[data-radix-scroll-area-viewport]]:pt-[33px]",
  },
};
