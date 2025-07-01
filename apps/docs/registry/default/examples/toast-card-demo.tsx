import { Player } from "@remotion/player";

import ToastCard, { PositionPreset } from "../components/toast-card"; // Adjust path as necessary

export default function ToastCardDemo() {
  const toastCardProps = {
    title: "Notification?",
    message: "Could be used as an interview notification.",
    titleColor: "var(--card-foreground)",
    messageColor: "var(--card-foreground)",
    backgroundColor: "var(--card)",
    titleFontSize: "1.2rem",
    messageFontSize: "0.8rem",
    width: "320px",
    padding: "18px 22px",
    borderRadius: "8px",
    borderColor: "var(--ring)",
    borderWidth: "1px",
    borderStyle: "solid" as const,
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    positionPreset: "bottom-right" as PositionPreset,
    margin: "40px",
    entryDurationInFrames: 25,
    visibleDurationInFrames: 150,
    exitDurationInFrames: 25,
    damping: 18,
    mass: 0.9,
    stiffness: 110,
    slideOffset: 60,
  };

  return (
    <Player
      component={ToastCard}
      inputProps={toastCardProps}
      durationInFrames={
        toastCardProps.entryDurationInFrames +
        toastCardProps.visibleDurationInFrames +
        toastCardProps.exitDurationInFrames +
        30
      } // Add buffer to see full exit
      compositionWidth={500}
      compositionHeight={400}
      fps={30}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--background)", // Or a contrasting color
      }}
      autoPlay
      controls
      loop
    />
  );
}
