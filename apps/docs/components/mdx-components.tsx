import React from "react";
import type { Page } from "fumadocs-core/source";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Heading } from "fumadocs-ui/components/heading";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import { HomeIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

import { cn } from "@/lib/utils";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { ComponentCode } from "@/components/component-code";
import { ComponentCollectionWrapper } from "@/components/component-collection-wrapper";
import { ComponentFileExplorer } from "@/components/component-file-explorer";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { ComponentTabs } from "@/components/component-tabs";
import { CSSVariablesTable } from "@/components/css-variables-table";
import { DataAttributesTable } from "@/components/data-attributes-table";
import { GithubInfo } from "@/components/github-info";
import { Kbd } from "@/components/kbd";
import { KeyboardShortcutsTable } from "@/components/keyboard-shortcuts-table";
import { PlayerCard } from "@/components/player-card";

export function useMdxComponents(
  components: Partial<MDXComponents>
): MDXComponents {
  const { Callout, Card, ...restDefaultComponents } = defaultComponents;
  const headings = Object.fromEntries(
    ["h1", "h2", "h3", "h4", "h5", "h6"].map((level) => [
      level,
      (props: React.ComponentProps<typeof Heading>) => (
        <Heading
          as={level as React.ComponentProps<typeof Heading>["as"]}
          {...props}
        />
      ),
    ])
  );

  return {
    ...restDefaultComponents,
    ...components,
    ...headings,
    Card: ({ className, ...props }) => (
      <Card className={cn("shadow-none", className)} {...props} />
    ),
    Callout: ({ className, ...props }) => (
      <Callout className={cn("shadow-none", className)} {...props} />
    ),
    table: ({ className, ...props }) => (
      <Table className={cn(className)} mdx {...props} />
    ),
    tr: TableRow,
    th: TableHead,
    td: TableCell,
    Tabs: ({ className, ...props }) => (
      <Tabs className={cn("rounded-md", className)} {...props} />
    ),
    Tab,
    pre: ({ children, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{children}</Pre>
      </CodeBlock>
    ),
    kbd: (props) => <Kbd variant="outline" {...props} />,
    ComponentTabs,
    ComponentSource,
    ComponentPreview,
    ComponentCollectionWrapper,
    Steps,
    Step,
    img: (props) => (
      <ImageZoom
        className="border-border rounded-md border"
        {...(props as any)}
      />
    ),
    AutoTypeTable: (props) => (
      <div className="auto-type-table">
        <AutoTypeTable {...props} />
      </div>
    ),
    CSSVariablesTable,
    DataAttributesTable,
    KeyboardShortcutsTable,
    GithubInfo,
    HomeIcon,
    PlayerCard,
    ComponentFileExplorer,
    ComponentCode,
  };
}

interface MdxProps {
  page: Page & {
    data: { body: React.ComponentType<{ components: MDXComponents }> };
  };
  components?: Partial<MDXComponents>;
}

export function Mdx({ page, components = {} }: MdxProps) {
  const Comp = page.data.body;
  const mdxComponents = useMdxComponents(components);

  return <Comp components={mdxComponents} />;
}
