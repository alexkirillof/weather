import React from "react";
import "./style.css";

export default function ProgressBar({ completed }) {
  const containerStyles__item = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#EC6E4D",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "all 0.5s ease",
  };

  return (
    <div className="containerStyles">
      <div className="containerStyles__top-info">
        <span className="containerText">0</span>
        <span className="containerText">50</span>
        <span className="containerText">100</span>
      </div>
      <span className="containerStyles__percent containerText">%</span>
      <div style={containerStyles__item}></div>
    </div>
  );
}
