import { Player } from "@remotion/player";

import LinearWaveform from "../ui/linear-waveform";

export default function LinearWaveformDemo() {
  const linearWaveformProps = {
    barCount: 40,
    barWidth: 8,
    barGap: 3,
    barBorderRadius: "1px",
    waveAmplitude: 150,
    waveSpeed: 5,
    randomness: 70,
    // Explicitly set height and width for the demo player if needed
    // otherwise it will use videoConfig dimensions
  };

  return (
    <Player
      component={LinearWaveform}
      inputProps={linearWaveformProps}
      durationInFrames={300} // e.g., 10 seconds at 30fps
      compositionWidth={640}
      compositionHeight={360} // 16:9 aspect ratio
      fps={30}
      style={{
        width: "100%",
        height: "100%", // Player will scale to fit its container
        backgroundColor: "transparent", // Using CSS variable for background
      }}
      autoPlay
      controls // Show player controls
      loop // Loop the animation
    />
  );
}
