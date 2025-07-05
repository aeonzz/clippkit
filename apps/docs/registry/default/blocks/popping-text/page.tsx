"use client";

import { Player } from "@remotion/player";

import PoppingText from "@/registry/default/components/popping-text"; // Adjust path as necessary

export default function PoppingTextDemo() {
  const poppingTextProps = {
    text: "Popping Text",
    colors: ["var(--foreground)"],
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={PoppingText}
        inputProps={poppingTextProps}
        durationInFrames={90} // Adjusted for potentially longer text or different pacing
        compositionWidth={480}
        compositionHeight={270} // 16:9 aspect ratio
        fps={30}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        autoPlay
        controls // Show player controls
        loop // Loop the animation
      />
    </div>
  );
}
