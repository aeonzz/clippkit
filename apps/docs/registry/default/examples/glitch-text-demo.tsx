import { Player } from "@remotion/player";

import GlitchText from "../components/glitch-text";

export default function GlitchTextDemo() {
  const glitchTextProps = {
    text: "Glitch!",
    textColor: "white", // Default is now var(--glitch-effect-white)
    glitchTextColor1: "var(--glitch-color-2)", // Default is now var(--glitch-cyan)
    glitchTextColor2: "var(--glitch-color-1)", // Default is now var(--glitch-magenta)
    fontSize: "3rem",
    glitchStrength: 15, // Adjusted for sporadic effect
    glitchSpeed: 2, // Affects frequency of new random values during a glitch
    sporadicGlitchChance: 0.5, // e.g., 10% chance of glitching per frame
  };

  return (
    <Player
      component={GlitchText}
      inputProps={glitchTextProps}
      durationInFrames={120} // Total duration of the player timeline (e.g., 4 seconds at 30fps)
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
