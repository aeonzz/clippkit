import React from "react";
import { MediaUtilsAudioData, useAudioData } from "@remotion/media-utils";
import { Player } from "@remotion/player";
import { Audio } from "remotion"; // Import Audio

import LinearWaveform from "../ui/linear-waveform";

// Media source for the demo
const MEDIA_SRC =
  "https://rwxrdxvxndclnqvznxfj.supabase.co/storage/v1/object/public/sounds//moon-landing.mp3";

// Define props for the new composition component
interface AudioWaveformCompositionProps {
  linearWaveformProps: Omit<
    React.ComponentProps<typeof LinearWaveform>,
    "audioData"
  > & { audioData?: MediaUtilsAudioData | null };
  mediaSrc: string;
}

// New component combining LinearWaveform and Audio
const AudioWaveformComposition: React.FC<AudioWaveformCompositionProps> = ({
  linearWaveformProps,
  mediaSrc,
}) => {
  return (
    <>
      <LinearWaveform {...linearWaveformProps} />
      <Audio src={mediaSrc} />
    </>
  );
};

export default function LinearWaveformDemo() {
  const audioData = useAudioData(MEDIA_SRC);

  const linearWaveformProps = React.useMemo(
    () => ({
      numberOfSamples: 108,
      strokeColor: "var(--foreground)",
      strokeWidth: 2,
      fillColor: "none",
      waveAmplitude: 100,
      waveSpeed: 3,
      audioData,
    }),
    [audioData]
  );

  // Calculate duration in frames for the player for better readability
  const playerDurationInFrames = audioData
    ? Math.floor(audioData.durationInSeconds * 30)
    : 300;

  console.log("audioData", audioData);
  return (
    <Player
      component={AudioWaveformComposition} // Use the new component
      inputProps={{ linearWaveformProps, mediaSrc: MEDIA_SRC }} // Pass props directly for AudioWaveformComposition
      durationInFrames={playerDurationInFrames} // Use the pre-calculated duration
      compositionWidth={640}
      compositionHeight={360}
      fps={30}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
      controls
      loop
    />
  );
}
