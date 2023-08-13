import React from "react";
import "./style.css";

export default function TabsBar({ toggleState, toggleTab }) {
  return (
    <div className="tab-headlines main-block-wrapper">
      <h2 className="main-title">Прогноз</h2>
      <div className="tab-headlines__items">
        <div
          className={`tab-headlines__item ${
            toggleState === "on week" ? "active-headlines" : ""
          }`}
          onClick={() => toggleTab("on week")}
        >
          <span>на неделю</span>
        </div>
        <div
          className={`tab-headlines__item ${
            toggleState === "on day" ? "active-headlines" : ""
          }`}
          onClick={() => toggleTab("on day")}
        >
          <span>почасовой</span>
        </div>
      </div>
    </div>
  );
}
