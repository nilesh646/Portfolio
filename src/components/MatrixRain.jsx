import React from "react";
import "./MatrixRain.css";

const MatrixRain = () => {
  return (
    <div className="matrix-rain">
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          101010101010101
        </span>
      ))}
    </div>
  );
};

export default MatrixRain;