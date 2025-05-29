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
import {
  MediaUtilsAudioData,
  visualizeAudioWaveform,
} from "@remotion/media-utils";
import { random, useCurrentFrame, useVideoConfig } from "remotion";

interface CircularWaveformProps {
  audioData?: MediaUtilsAudioData | null;
  barCount?: number;
  barWidth?: number;
  barColor?: string;
  waveAmplitude?: number;
  radius?: number;
  centerOffset?: { x?: number; y?: number };
  containerStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
  barMinHeight?: number;
  strokeLinecap?: "butt" | "round" | "square";
  transitionDuration?: string;
  transitionTimingFunction?: string;
  rotationOffset?: number;
}

export default function CircularWaveform({
  audioData,
  barCount = 60,
  barWidth = 5,
  barColor = "var(--foreground)",
  waveAmplitude = 50,
  radius = 100,
  centerOffset = { x: 0, y: 0 },
  containerStyle,
  barStyle,
  height: propHeight,
  width: propWidth,
  barMinHeight = 5,
  strokeLinecap = "butt",
  transitionDuration = "0.05s",
  transitionTimingFunction = "ease-out",
  rotationOffset = 0,
}: CircularWaveformProps) {
  const frame = useCurrentFrame();
  const { width: videoWidth, height: videoHeight, fps } = useVideoConfig();

  const finalWidth = propWidth ?? videoWidth;
  const finalHeight = propHeight ?? videoHeight;

  const centerX =
    (typeof finalWidth === "number"
      ? finalWidth / 2
      : parseFloat(String(finalWidth).replace("px", "")) / 2) +
    (centerOffset.x ?? 0);
  const centerY =
    (typeof finalHeight === "number"
      ? finalHeight / 2
      : parseFloat(String(finalHeight).replace("px", "")) / 2) +
    (centerOffset.y ?? 0);

  const waveformSamples = audioData
    ? visualizeAudioWaveform({
        fps,
        frame,
        audioData,
        numberOfSamples: barCount,
        windowInSeconds: 1 / fps,
      })
    : Array(barCount)
        .fill(0)
        .map((_, i) => {
          const seed = i * 1000;
          return (
            Math.max(
              0.1,
              Math.abs(Math.sin(frame / 10 + i / (barCount / (2 * Math.PI)))) +
                random(seed) * 0.3
            ) *
              0.5 +
            0.25
          );
        });

  const bars = waveformSamples.map((sample, i) => {
    const angleRad =
      (i / barCount) * 2 * Math.PI + (rotationOffset * Math.PI) / 180;
    const dynamicHeight = Math.max(barMinHeight, sample * waveAmplitude);

    const x1 = centerX + radius * Math.cos(angleRad);
    const y1 = centerY + radius * Math.sin(angleRad);
    const x2 = centerX + (radius + dynamicHeight) * Math.cos(angleRad);
    const y2 = centerY + (radius + dynamicHeight) * Math.sin(angleRad);

    return {
      x1,
      y1,
      x2,
      y2,
      height: dynamicHeight,
    };
  });

  return (
    <div
      style={{
        width: finalWidth,
        height: finalHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "transparent",
        position: "relative",
        ...containerStyle,
      }}
    >
      <svg width="100%" height="100%" style={{ overflow: "visible" }}>
        {bars.map((bar, i) => (
          <line
            key={i}
            x1={bar.x1}
            y1={bar.y1}
            x2={bar.x2}
            y2={bar.y2}
            stroke={barColor}
            strokeWidth={barWidth}
            strokeLinecap={strokeLinecap}
            style={{
              transitionProperty: "all",
              transitionDuration: transitionDuration,
              transitionTimingFunction: transitionTimingFunction,
              ...barStyle,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
