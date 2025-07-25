"use client";

import { Player } from "@remotion/player";

import CardFlip from "@/registry/default/components/card-flip"; // Adjust path as necessary

export default function CardFlipDemo() {
  const cardFlipProps = {
    frontText: "Clippkit",
    backText: "Card Flip?",
    frontTextColor: "var(--foreground)",
    backTextColor: "var(--foreground)",
    frontBackgroundColor: "var(--card)",
    backBackgroundColor: "var(--card)",
    fontSize: "1.3rem",
    width: "220px",
    height: "300px",
    borderRadius: "18px",
    borderColor: "var(--primary)",
    borderWidth: "1px",
    borderStyle: "solid" as const,
    durationInFrames: 80,
    damping: 18,
    mass: 0.6,
    stiffness: 90,
  };

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={CardFlip}
        inputProps={cardFlipProps}
        durationInFrames={120}
        compositionWidth={480}
        compositionHeight={400}
        fps={30}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        autoPlay
        controls
        loop
      />
    </div>
  );
}
