"use client";

import React from "react";
import { MediaUtilsAudioData, useAudioData } from "@remotion/media-utils";
import { Player } from "@remotion/player";
import { Audio } from "remotion";

import BarWaveform from "@/registry/default/components/bar-waveform"; // Adjust path as necessary

const MEDIA_SRC =
  "https://rwxrdxvxndclnqvznxfj.supabase.co/storage/v1/object/public/sounds//moon-landing.mp3";

interface AudioWaveformCompositionProps {
  barWaveformProps: Omit<
    React.ComponentProps<typeof BarWaveform>,
    "audioData"
  > & { audioData?: MediaUtilsAudioData | null };
  mediaSrc: string;
}

const AudioWaveformComposition: React.FC<AudioWaveformCompositionProps> = ({
  barWaveformProps,
  mediaSrc,
}) => {
  return (
    <>
      <BarWaveform {...barWaveformProps} />
      <Audio src={mediaSrc} />
    </>
  );
};

export default function BarWaveformDemo() {
  const audioData = useAudioData(MEDIA_SRC);

  const barWaveformProps = React.useMemo(
    () => ({
      numberOfSamples: 50,
      barColor: "var(--foreground)",
      barWidth: 3,
      barGap: 2,
      waveAmplitude: 220,
      waveSpeed: 5,
      audioData,
      barBorderRadius: 0,
      growUpwardsOnly: false,
    }),
    [audioData]
  );

  const playerDurationInFrames = audioData
    ? Math.floor(audioData.durationInSeconds * 30)
    : 300;

  return (
    <div className="aspect-video h-[180px] sm:h-[350px] md:h-[400px]">
      <Player
        component={AudioWaveformComposition}
        inputProps={{ barWaveformProps, mediaSrc: MEDIA_SRC }}
        durationInFrames={playerDurationInFrames}
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
    </div>
  );
}
