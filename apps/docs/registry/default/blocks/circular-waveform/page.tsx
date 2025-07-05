"use client";

import React from "react"; // Import React
import { MediaUtilsAudioData, useAudioData } from "@remotion/media-utils";
import { Player } from "@remotion/player";
import { Audio } from "remotion"; // Import Audio

import CircularWaveform from "@/registry/default/components/circular-waveform"; // Adjust path as necessary

// Media source for the demo
const MEDIA_SRC =
  "https://rwxrdxvxndclnqvznxfj.supabase.co/storage/v1/object/public/sounds//moon-landing.mp3";

// Define props for the new composition component
interface AudioCircularWaveformCompositionProps {
  circularWaveformProps: Omit<
    React.ComponentProps<typeof CircularWaveform>,
    "audioData"
  > & { audioData?: MediaUtilsAudioData | null };
  mediaSrc: string;
}

// New component combining CircularWaveform and Audio
const AudioCircularWaveformComposition: React.FC<
  AudioCircularWaveformCompositionProps
> = ({ circularWaveformProps, mediaSrc }) => {
  return (
    <>
      <CircularWaveform {...circularWaveformProps} />
      <Audio src={mediaSrc} />
    </>
  );
};

export default function CircularWaveformDemo() {
  const audioData = useAudioData(MEDIA_SRC);

  const circularWaveformProps = React.useMemo(
    () => ({
      barCount: 180,
      barWidth: 2,
      waveAmplitude: 100,
      radius: 80,
      audioData,
      strokeLinecap: "round" as const,
      barMinHeight: 2,
      transitionDuration: "0.1s",
      transitionTimingFunction: "ease-in-out",
      rotationOffset: 45,
      barColor: "var(--foreground)",
      growOutwardsOnly: true,
    }),
    [audioData]
  );

  // Calculate duration in frames for the player for better readability
  const playerDurationInFrames = audioData
    ? Math.floor(audioData.durationInSeconds * 30)
    : 300;

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={AudioCircularWaveformComposition} // Use the new component
        inputProps={{ circularWaveformProps, mediaSrc: MEDIA_SRC }} // Pass props directly
        durationInFrames={playerDurationInFrames} // e.g., 10 seconds at 30fps
        compositionWidth={640}
        compositionHeight={360} // 16:9 aspect ratio
        fps={30}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        controls // Show player controls
        loop
      />
    </div>
  );
}
