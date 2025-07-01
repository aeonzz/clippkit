import { Player } from "@remotion/player";

import SlidingText from "../components/sliding-text";

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
    <Player
      component={SlidingText}
      inputProps={slidingTextProps}
      durationInFrames={60} // Total duration of the player timeline (e.g., 2 seconds at 30fps)
      compositionWidth={480}
      compositionHeight={270} // 16:9 aspect ratio
      fps={30}
      style={{
        width: "100%",
        height: "100%", // Player will scale to fit its container
      }}
      autoPlay
      controls // Show player controls
      loop // Loop the animation
    />
  );
}
