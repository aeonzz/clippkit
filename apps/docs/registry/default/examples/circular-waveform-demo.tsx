import { Player } from "@remotion/player";

import CircularWaveform from "../ui/circular-waveform";

export default function CircularWaveformDemo() {
  const circularWaveformProps = {
    barCount: 80,
    barWidth: 2,
    waveAmplitude: 10,
    waveSpeed: 8,
    randomness: 30,
    radius: 100,
    // Explicitly set height and width for the demo player if needed
    // otherwise it will use videoConfig dimensions
  };

  return (
    <Player
      component={CircularWaveform}
      inputProps={circularWaveformProps}
      durationInFrames={300} // e.g., 10 seconds at 30fps
      compositionWidth={640}
      compositionHeight={360} // 16:9 aspect ratio
      fps={30}
      style={{
        width: "100%",
        height: "100%", // Player will scale to fit its container
        backgroundColor: "transparent",
      }}
      autoPlay
      controls // Show player controls
      loop // Loop the animation
    />
  );
}
