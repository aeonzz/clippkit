"use client";

import * as React from "react";

import { BlockDisplay } from "@/components/block-display";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

interface IdeViewProps extends React.ComponentProps<"div"> {
  name: string;
}

export function IdeView({ name }: IdeViewProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open Block</Button>} />
      <DialogContent className="max-h-[calc(100%-2rem)] p-3 sm:max-w-5xl">
        <BlockDisplay name={name} />
      </DialogContent>
    </Dialog>
  );
}
