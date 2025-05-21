/**
 * Free Remotion Template Component
 * ---------------------------------
 * This template is free to use in your projects!
 * Credit appreciated but not required.
 *
 * Created by the team at https://www.reactvideoeditor.com
 *
 * Happy coding and building amazing videos! 🎉
 */

"use client";

import React from "react";
import { random, useCurrentFrame, useVideoConfig } from "remotion";

interface LinearWaveformProps {
  barCount?: number;
  barWidth?: number;
  barGap?: number;
  barColor?: string;
  barBorderRadius?: string;
  waveAmplitude?: number;
  waveSpeed?: number;
  randomness?: number;
  containerStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties;
  barShadow?: string;
  height?: string | number;
  width?: string | number;
}

export default function LinearWaveform({
  barCount = 40,
  barWidth = 12,
  barGap = 4,
  barColor = "var(--foreground)",
  barBorderRadius = "2px",
  waveAmplitude = 100,
  waveSpeed = 10,
  randomness = 50,
  containerStyle,
  barStyle,
  barShadow = "none",
  height: propHeight,
  width: propWidth,
}: LinearWaveformProps) {
  const frame = useCurrentFrame();
  const { width: videoWidth, height: videoHeight } = useVideoConfig();

  const bars = Array.from({ length: barCount }).map((_, i) => {
    const seed = i * 1000; // Keep seed somewhat unique per bar for consistent randomness
    const dynamicHeight =
      Math.abs(Math.sin(frame / waveSpeed + i / (barCount / Math.PI))) *
        waveAmplitude +
      random(seed) * randomness;

    return {
      height: Math.max(5, dynamicHeight), // Ensure a minimum height for visibility
      // Hue can be dynamic or fixed based on props if needed later
      // hue: (i / barCount) * 180 + frame,
    };
  });

  const finalWidth = propWidth ?? videoWidth;
  const finalHeight = propHeight ?? videoHeight;

  return (
    <div
      style={{
        width: finalWidth,
        height: finalHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${barGap}px`,
        overflow: "hidden",
        backgroundColor: "transparent",
        ...containerStyle,
      }}
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          style={{
            width: `${barWidth}px`,
            height: `${bar.height}px`,
            backgroundColor: barColor,
            borderRadius: barBorderRadius,
            transition: "height 0.05s ease-out", // Smoother transition
            boxShadow: barShadow,
            ...barStyle,
          }}
        />
      ))}
    </div>
  );
}
