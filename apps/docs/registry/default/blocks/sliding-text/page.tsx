"use client";

import { Player } from "@remotion/player";

import SlidingText from "@/registry/default/components/sliding-text"; // Adjust path as necessary

export default function SlidingTextDemo() {
  const slidingTextProps = {
    text: "Sliding Text!",
    textColor: "var(--foreground)",
    fontSize: "2.5rem",
    slideDirection: "left" as const,
    durationInFrames: 30, // Animation duration for the text itself
    initialOffset: 150,
    damping: 12,
    mass: 0.5,
    stiffness: 100,
  };

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={SlidingText}
        inputProps={slidingTextProps}
        durationInFrames={60} // Total duration of the player timeline (e.g., 2 seconds at 30fps)
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
