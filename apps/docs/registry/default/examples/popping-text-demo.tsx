import { Player } from "@remotion/player";

import PoppingText from "../ui/popping-text";

export default function PoppingTextDemo() {
  const poppingTextProps = {
    text: "Hello!",
    colors: ["var(--foreground)"],
    fontSize: "4rem",
    // Example of customizing animation params, uncomment to use
    // delayPerChar: 5,
    // opacityMass: 0.2,
    // yFrom: -100,
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
