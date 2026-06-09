import React, { useMemo } from "react";
import Particles from "@tsparticles/react";

function Particle() {
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: "#000000",
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 120,
        },

        color: {
          value: "#00ff41",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: { min: 1, max: 3 },
        },

        move: {
          enable: true,
          speed: 1,
          direction: "bottom",
          straight: true,
        },

        links: {
          enable: false,
        },
      },

      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
}

export default Particle;

