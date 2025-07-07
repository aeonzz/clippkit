"use client";

import * as React from "react";

import { useConfig } from "@/hooks/use-config";
import { styles } from "@/registry/registry-styles";

interface ComponentCodeProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export function ComponentCode({ children }: ComponentCodeProps) {
  const [config] = useConfig();
  const index = styles.findIndex((style) => style.name === config.style);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[index];

  return Code;
}
