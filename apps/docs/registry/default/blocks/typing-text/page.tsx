"use client";

import { Player } from "@remotion/player";

import TypingText from "@/registry/default/components/typing-text"; // Adjust path as necessary

export default function TypingTextDemo() {
  const typingTextProps = {
    text: "Typing text...",
    textColor: "var(--foreground)",
    cursorColor: "var(--primary)",
    fontSize: "2.5rem",
    fontFamily: "monospace",
    fontWeight: "normal",
    durationInFramesToType: 120, // Type out over 4 seconds at 30fps
    cursorBlinkSpeed: 15, // Default blink speed
  };

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={TypingText}
        inputProps={typingTextProps}
        durationInFrames={180} // Allow time for text to be fully typed + pause
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
