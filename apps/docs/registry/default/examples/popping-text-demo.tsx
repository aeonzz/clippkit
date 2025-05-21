import { Player } from "@remotion/player";

import PoppingText from "../ui/popping-text";

export default function PoppingTextDemo() {
  const poppingTextProps = {
    text: "Popping Text",
    colors: ["var(--foreground)"],
    fontSize: "3rem",
    fontWeight: "bold",
  };

  return (
    <Player
      component={PoppingText}
      inputProps={poppingTextProps}
      durationInFrames={90} // Adjusted for potentially longer text or different pacing
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
