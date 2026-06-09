import React, { useEffect } from "react";
import MatrixRain from "./MatrixRain";
import "./MatrixIntro.css";

function MatrixIntro({ onFinish }) {
  useEffect(() => {

    const timer = setTimeout(() => {
        onFinish();
    }, 2000);

    return () => clearTimeout(timer);

    }, [onFinish]);

  return (
    <div className="matrix-intro">
      <MatrixRain />

      <div className="matrix-overlay">
        <h1 className="matrix-glow">
            NILESH.EXE
            </h1>

        <p>Initializing Portfolio...</p>
      </div>
    </div>
  );
}

export default MatrixIntro;