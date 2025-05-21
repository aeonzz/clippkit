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

interface CircularWaveformProps {
  barCount?: number;
  barWidth?: number;
  barColor?: string;
  waveAmplitude?: number;
  waveSpeed?: number;
  randomness?: number;
  radius?: number;
  centerOffset?: { x?: number; y?: number };
  containerStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
}

export default function CircularWaveform({
  barCount = 60,
  barWidth = 5,
  barColor = "var(--foreground)",
  waveAmplitude = 50,
  waveSpeed = 10,
  randomness = 30,
  radius = 100,
  centerOffset = { x: 0, y: 0 },
  containerStyle,
  barStyle,
  height: propHeight,
  width: propWidth,
}: CircularWaveformProps) {
  const frame = useCurrentFrame();
  const { width: videoWidth, height: videoHeight } = useVideoConfig();

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

  const bars = Array.from({ length: barCount }).map((_, i) => {
    const seed = i * 1000;
    const angle = (i / barCount) * 2 * Math.PI;
    const dynamicHeight = Math.max(
      5,
      Math.abs(Math.sin(frame / waveSpeed + i / (barCount / (2 * Math.PI)))) *
        waveAmplitude +
        random(seed) * randomness
    );

    const x1 = centerX + radius * Math.cos(angle);
    const y1 = centerY + radius * Math.sin(angle);
    const x2 = centerX + (radius + dynamicHeight) * Math.cos(angle);
    const y2 = centerY + (radius + dynamicHeight) * Math.sin(angle);

    return {
      x1,
      y1,
      x2,
      y2,
      height: dynamicHeight, // Not directly used for line, but for potential bar representation
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
        position: "relative", // Needed for absolute positioning of bars if we switch to div bars
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
            style={{
              transition: "all 0.05s ease-out",
              ...barStyle, // Note: some CSS properties might not apply to SVG elements directly
            }}
          />
        ))}
      </svg>
    </div>
  );
}
