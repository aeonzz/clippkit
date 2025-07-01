import React from "react";
import { Player } from "@remotion/player";

import CircularLoader, {
  CircularProgressProps,
} from "../components/circular-loader";

// This Composition component will pass props to the new CircularLoader
interface CircularLoaderCompositionProps {
  loaderProps: CircularProgressProps; // Changed to avoid confusion with the old name
}

const CircularLoaderComposition: React.FC<CircularLoaderCompositionProps> = ({
  loaderProps,
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
      <CircularLoader {...loaderProps} />
    </div>
  );
};

export default function CircularLoaderDemo() {
  const loaderPropsForDemo = React.useMemo<CircularProgressProps>(
    () => ({
      size: 250,
      progressSource: "time",
      durationInFrames: 120, // 4 seconds at 30fps
      loopProgress: true,
      // Track
      showTrack: true,
      trackColor: "rgba(100, 100, 100, 0.3)",
      trackStrokeWidth: 10,
      // Progress Arc
      progressStrokeWidth: 12,
      progressStrokeLinecap: "round",
      progressColorMode: "solid",
      progressSolidColor: "var(--primary)",
      // Pulse
      enablePulse: true,
      pulseMagnitude: 0.03,
      pulseSpeed: 0,
      // Text
      showPercentageText: true,
      textColor: "var(--primary)",
      textSize: "3rem",
      textFontWeight: "600",
    }),
    []
  );

  const playerDurationInFrames = 120; // Match durationInFrames for a full cycle example

  return (
    <Player
      component={CircularLoaderComposition}
      inputProps={{ loaderProps: loaderPropsForDemo }} // Pass the new props object
      durationInFrames={playerDurationInFrames}
      compositionWidth={640}
      compositionHeight={480} // Increased height for better viewing
      fps={30}
      style={{
        width: "100%",
        height: "100%",
      }}
      controls
      loop
    />
  );
}
