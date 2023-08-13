import React from "react";
import "./style.css";

export default function Button({ children, onClick, name, disabled }) {
  return (
    <button
      className={`btn btn-text ${name}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
