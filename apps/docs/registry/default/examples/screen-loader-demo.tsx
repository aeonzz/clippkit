import React from "react";
import { Player } from "@remotion/player";

import ScreenLoader, { ScreenLoaderProps } from "../ui/screen-loader";

// ScreenLoaderComposition component removed

export default function ScreenLoaderDemo() {
  const demoContainerWidth = 300;
  const demoContainerHeight = 200;
  const playerCompositionWidth = demoContainerWidth + 100;
  const playerCompositionHeight = demoContainerHeight + 100;

  const loaderPropsForDemo = React.useMemo<ScreenLoaderProps>(
    () => ({
      loaderSize: 15,
      loaderColor: "var(--primary)",
      containerWidth: playerCompositionWidth,
      containerHeight: playerCompositionHeight,
      durationInFrames: 150,
      loop: true,
      variant: "double",
    }),
    [playerCompositionWidth, playerCompositionHeight]
  );

  return (
    <Player
      component={ScreenLoader as any} // Use ScreenLoader directly, assert type to any
      inputProps={loaderPropsForDemo as any} // Pass loaderPropsForDemo as inputProps, assert type to any
      durationInFrames={150}
      compositionWidth={playerCompositionWidth}
      compositionHeight={playerCompositionHeight}
      fps={30}
      style={{
        width: "100%",
        height: "100%",
      }}
      controls
      loop
    />
  );
}
