"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, File, Folder } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { getIconForLanguageExtension } from "./icons";
import { Button } from "./ui/button";

interface FileNode {
  name: string;
  path?: string;
  children?: FileNode[];
}

interface ComponentFileExplorerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  expandLink: string;
  files: FileNode[];
  children: React.ReactNode;
}

export function ComponentFileExplorer({
  expandLink,
  files,
  children,
  ...props
}: ComponentFileExplorerProps) {
  const codeBlocks = React.Children.toArray(children) as React.ReactElement[];
  const [active, setActive] = React.useState(0);

  function flattenFiles(
    nodes: FileNode[],
    acc: { name: string; idx: number; path?: string }[] = [],
    idx = { value: 0 },
    parentPath = ""
  ) {
    for (const node of nodes) {
      const currentPath = parentPath ? `${parentPath}/${node.name}` : node.name;
      if (node.children) {
        flattenFiles(node.children, acc, idx, currentPath);
      } else {
        acc.push({
          name: node.name,
          idx: idx.value,
          path: node.path || currentPath,
        });
        idx.value++;
      }
    }
    return acc;
  }

  const flatFiles = flattenFiles(files);

  function getLanguageFromFileName(fileName: string) {
    const ext = fileName.split(".").pop();
    if (!ext) return "tsx";
    if (["js", "jsx"].includes(ext)) return "js";
    if (["ts", "tsx"].includes(ext)) return "ts";
    if (["json", "css"].includes(ext)) return ext;
    return ext;
  }

  const activeFile = flatFiles[active] || {
    name: "index.tsx",
    path: "index.tsx",
  };
  const activeFileName = activeFile.name;
  const language = getLanguageFromFileName(activeFileName);

  function Tree({ item, index }: { item: FileNode; index: number }) {
    if (!item.children) {
      const fileIdx = flatFiles.find((f) => f.name === item.name)?.idx ?? 0;
      return (
        <SidebarMenuItem className="!my-0 list-none">
          <SidebarMenuButton
            isActive={active === fileIdx}
            onClick={() => setActive(fileIdx)}
            className="hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) text-xs whitespace-nowrap"
            style={
              {
                "--index": `${index * (index === 2 ? 1 : 1)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="invisible" />
            <File className="h-4 w-4" />
            {item.name}
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuItem className="!my-0 list-none">
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className="hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) text-xs whitespace-nowrap"
              style={
                {
                  "--index": `${index * (index === 1 ? 1 : 1)}rem`,
                } as React.CSSProperties
              }
            >
              <ChevronRight className="transition-transform" />
              <Folder className="h-4 w-4" />
              {item.name}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className="!m-0 w-full translate-x-0 gap-0 border-none p-0">
              {item.children.map((subItem, key) => (
                <Tree key={key} item={subItem} index={index + 1} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }

  return (
    <div
      {...props}
      className="bg-code relative flex flex-col overflow-hidden rounded-md border sm:flex-row"
    >
      <SidebarProvider className="flex !min-h-full flex-col border-r">
        <Sidebar collapsible="none" className="w-full sm:w-56">
          <SidebarGroupLabel className="my-0 flex h-12 items-center rounded-none border-b pr-2 pl-4 text-sm">
            <span>Files</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-code-foreground ml-auto text-xs"
              title="Full View"
              asChild
            >
              <Link href={expandLink} target="_blank" className="no-underline">
                Full View
              </Link>
            </Button>
          </SidebarGroupLabel>
          <SidebarGroup className="my-0 p-0">
            <SidebarGroupContent>
              <SidebarMenu className="!my-0 translate-x-0 p-0">
                {files.map((item, index) => (
                  <Tree key={index} item={item} index={1} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </Sidebar>
      </SidebarProvider>
      <div className="w-full [&_[data-radix-scroll-area-viewport]]:max-h-82 [&_figure]:my-0 [&_figure]:h-82 [&_figure]:w-auto [&_figure]:rounded-none">
        <div
          className="text-code-foreground [&_svg]:text-code-foreground flex h-12 items-center gap-2 border-b px-4 py-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          <span className="font-mono text-xs opacity-80">
            {activeFile.path}
          </span>
        </div>
        {codeBlocks[active]}
      </div>
    </div>
  );
}
