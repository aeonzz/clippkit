"use client";

import React from "react";
import { Player } from "@remotion/player";

import BarLoader from "@/registry/default/components/bar-loader"; // Adjust path as necessary

// Define props for the new composition component
interface BarLoaderCompositionProps {
  barLoaderProps: React.ComponentProps<typeof BarLoader>;
}

// New component combining BarLoader
const BarLoaderComposition: React.FC<BarLoaderCompositionProps> = ({
  barLoaderProps,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BarLoader {...barLoaderProps} />
    </div>
  );
};

export default function BarLoaderDemo() {
  const barLoaderProps = React.useMemo(
    () => ({
      loadingText: "Loading...",
      barColor: "var(--primary)", // Green bar
      textColor: "var(--primary)",
      width: "30%",
      height: "20%",
      hideText: false, // Uncomment to hide the loading text
      barBorderRadius: 4, // Example: 4px border radius for the bar
      trackColor: "var(--muted)", // Example: Darker track color
      barHeight: "10px", // Example: 20px bar height
    }),
    []
  );

  const playerDurationInFrames = 150; // 5 seconds at 30fps

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={BarLoaderComposition}
        inputProps={{ barLoaderProps }}
        durationInFrames={playerDurationInFrames}
        compositionWidth={640}
        compositionHeight={360}
        fps={30}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        controls
        loop
      />
    </div>
  );
}
