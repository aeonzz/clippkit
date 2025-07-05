"use client";

import React from "react";
import Link from "next/link";

import { Button } from "./ui/button";

interface FileWrapperProps extends React.ComponentProps<"div"> {
  name?: string;
}

export function FileWrapper({ children, name, ...props }: FileWrapperProps) {
  return (
    <div
      className="bg-accent/30 text-accent-foreground group relative rounded-md border p-2"
      {...props}
    >
      {name && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-[15px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          title="Full View"
          asChild
        >
          <Link
            href={`/usage/u-${name}`}
            target="_blank"
            className="no-underline"
          >
            Full View
          </Link>
        </Button>
      )}
      {children}
    </div>
  );
}
