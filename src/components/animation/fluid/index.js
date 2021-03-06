import React, { useRef } from "react";
import { Canvas } from "@react-vertex/core";
import { useMeasure } from "@react-vertex/dom-hooks";
import Simulation from "./Simulation";

const attrs = {
  alpha: true,
  depth: false,
  stencil: false,
  antialias: false,
  preserveDrawingBuffer: false,
};

const style = {
  borderRadius: 4,
  cursor: "pointer",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
};

// ORIGINAL https://github.com/PavelDoGreat/WebGL-Fluid-Simulation

const FluidSimulation = ({ theme }) => {
  const container = useRef();
  const { width } = useMeasure(container);
  return (
    <div ref={container}>
      {width ? (
        <Canvas
          webgl2
          width={width}
          height={window.innerHeight - 4}
          canvasStyle={style}
          contextAttrs={attrs}
        >
          <Simulation theme={theme} />
        </Canvas>
      ) : null}
    </div>
  );
};

export default FluidSimulation;
