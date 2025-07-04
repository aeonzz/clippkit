import * as React from "react";
import { notFound } from "next/navigation";
import { z } from "zod";

import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { registryItemSchema } from "@/registry/schema";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export async function generateStaticParams() {
  const { Index } = await import("@/__registry__");
  const index = z.record(registryItemSchema).parse(Index.default);

  return Object.values(index)
    .filter((block) => ["registry:block"].includes(block.type))
    .map((block) => ({
      name: block.name,
    }));
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}) {
  const { name } = await params;
  const item = await getCachedRegistryItem(name);
  const Component = getRegistryComponent(name);

  if (!item || !Component) {
    return notFound();
  }

  return (
    <>
      <div className={cn("bg-background", item.meta?.container)}>
        <div className="overflow-hidden rounded-md border">
          <Component />
        </div>
      </div>
    </>
  );
}
