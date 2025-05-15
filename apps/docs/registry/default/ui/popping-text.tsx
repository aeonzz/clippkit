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

import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface PoppingTextProps {
  text?: string;
  colors?: string[];
  fontSize?: string;
  fontFamily?: string;
  delayPerChar?: number;
  opacityMass?: number;
  opacityDamping?: number;
  opacityStiffness?: number;
  yFrom?: number;
  yMass?: number;
  yDamping?: number;
  yStiffness?: number;
  scaleFrom?: number;
  scaleTo?: number;
  scaleMass?: number;
  scaleDamping?: number;
  scaleStiffness?: number;
}

export default function PoppingText({
  text: textProp = "BINO!",
  colors: colorsProp = [
    "#000000", // black
    "#FFFFFF", // white
  ],
  fontSize: fontSizeProp = "8rem",
  fontFamily: fontFamilyProp = "'Impact', 'Arial Black', sans-serif",
  delayPerChar = 7,
  opacityMass = 0.3,
  opacityDamping = 8,
  opacityStiffness = 100,
  yFrom = -200,
  yMass = 0.5,
  yDamping = 6,
  yStiffness = 120,
  scaleFrom = 0,
  scaleTo = 1.2,
  scaleMass = 0.4,
  scaleDamping = 7,
  scaleStiffness = 150,
}: PoppingTextProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textChars = textProp.split("");
  const currentColors = colorsProp;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        textAlign: "center",
        perspective: "1000px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {textChars.map((char, i) => {
        const delay = i * delayPerChar;
        const colorIndex = i % currentColors.length;

        const opacity = spring({
          frame: frame - delay,
          fps,
          from: 0,
          to: 1,
          config: {
            mass: opacityMass,
            damping: opacityDamping,
            stiffness: opacityStiffness,
          },
        });

        const y = spring({
          frame: frame - delay,
          fps,
          from: yFrom,
          to: 0,
          config: { mass: yMass, damping: yDamping, stiffness: yStiffness },
        });

        const scale = spring({
          frame: frame - delay,
          fps,
          from: scaleFrom,
          to: scaleTo,
          config: {
            mass: scaleMass,
            damping: scaleDamping,
            stiffness: scaleStiffness,
          },
        });

        const bounce =
          interpolate(Math.sin((frame - delay - 15) / 10), [-1, 1], [0, 25], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }) * Math.max(0, Math.min(1, (frame - delay - 15) / 20));

        const rotation =
          interpolate(Math.sin((frame - delay - 15) / 15), [-1, 1], [-15, 15], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }) * Math.max(0, Math.min(1, (frame - delay - 15) / 20));

        const rotateY = interpolate(
          Math.sin((frame - delay) / 20),
          [-1, 1],
          [-30, 30]
        );

        const pulse =
          1 +
          interpolate(Math.sin((frame - delay) / 10), [-1, 1], [0, 0.2]) *
            Math.min(1, Math.max(0, (frame - delay - 20) / 30));

        return (
          <span
            key={i}
            style={{
              position: "relative",
              display: "inline-block",
              opacity,
              color: currentColors[colorIndex],
              fontSize: fontSizeProp,
              fontWeight: "900",
              margin: "0 0.1em",
              transform: `translateY(${y - bounce}px) 
                          scale(${scale * pulse}) 
                          rotate(${rotation}deg) 
                          rotateY(${rotateY}deg)`,
              transition: "all 0.2s ease",
              fontFamily: fontFamilyProp,
              letterSpacing: "0.05em",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
}
