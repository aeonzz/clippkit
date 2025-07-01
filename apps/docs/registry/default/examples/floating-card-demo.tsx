import { Player } from "@remotion/player";

import FloatingCard from "../components/floating-card"; // Adjusted path

export default function FloatingCardDemo() {
  const floatingCardProps = {
    text: "Floating Card!",
    textColor: "var(--foreground)",
    backgroundColor: "var(--card)",
    fontSize: "1.5rem",
    width: "250px",
    height: "180px",
    borderRadius: "20px",
    borderColor: "var(--primary)",
    borderWidth: "1px",
    borderStyle: "solid" as const,
    durationInFrames: 40, // Entry animation duration
    damping: 15,
    mass: 0.7,
    stiffness: 110,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1)",
    floatAmplitude: 15, // Amplitude of the float
    floatSpeed: 40, // Speed of the float
  };

  return (
    <Player
      component={FloatingCard}
      inputProps={floatingCardProps}
      durationInFrames={180} // Total duration of the player timeline, longer to see float
      compositionWidth={480}
      compositionHeight={400}
      fps={30}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--background)",
      }}
      autoPlay
      controls
      loop
    />
  );
}
