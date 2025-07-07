import * as React from "react";
import { z } from "zod";

import { BlockDisplay } from "@/components/block-display";
import { registryItemSchema } from "@/registry/schema";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const { Index } = await import("@/__registry__");
  const index = z.record(registryItemSchema).parse(Index.default);

  return Object.values(index)
    .filter((block) => ["registry:block"].includes(block.type))
    .map((block) => ({
      name: block.name,
    }));
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div className="flex min-h-screen flex-col gap-12 px-3 py-3.5 md:gap-24">
      <BlockDisplay name={name} />
    </div>
  );
}
