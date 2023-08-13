import React, { useContext, useEffect, useRef, useState } from "react";
import { CustomContext } from "../../../hooks/Context";
import Card from "../../Card";
import "./style.css";

export default function Tabs({ toggleState }) {
  const { onDay, onWeek, pos, setPos } = useContext(CustomContext);
  const contentref = useRef(null);
  const wrapperref = useRef(null);

  const [isDisabledLeftArrow, setIsDisabledLeftArrow] = useState(false);
  const [isDisabledRightArrow, setIsDisabledRightArrow] = useState(false);

  useEffect(() => {
    if (!wrapperref.current?.clientWidth || !contentref.current.clientWidth) {
      return;
    }
    setIsDisabledLeftArrow(pos >= 0);
    setIsDisabledRightArrow(
      -pos + wrapperref.current.clientWidth >= contentref.current.clientWidth
    );
  }, [pos]);

  const active = {
    top: 0,
    left: `${pos}px`,
  };

  const leftOffset = () => {
    let offset = 123;
    if (-pos < offset) {
      offset = -pos;
    }
    setPos((prev) => prev + offset);
  };
  const rightOffset = () => {
    let offset = 123;
    const last =
      contentref.current.clientWidth - wrapperref.current.clientWidth + pos;
    if (last < offset) {
      offset = last;
    }
    setPos((prev) => prev - offset);
  };
  useEffect(() => {
    setPos(0);
  }, [toggleState]);

  return (
    <div className="tab-body">
      <button
        className="left-arrow"
        onClick={leftOffset}
        disabled={isDisabledLeftArrow}
      >
        <svg
          width="38 "
          height="38 "
          viewBox="0 0 38 38 "
          fill="none "
          className="arrow"
        >
          <circle cx="19 " cy="19 " r="19 " transform="rotate(-180 19 19) " />
          <path
            d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5 "
            strokeWidth="3 "
          />
        </svg>
      </button>
      <div className="tab-body__items" ref={wrapperref}>
        {/* К А Р Т О Ч К И  Н А  Н Е Д Е Л Ю */}
        <div
          className={`tab-body__item  active-item ${
            toggleState === "on week" ? "week" : "day"
          }`}
          style={active}
          ref={contentref}
        >
          {toggleState === "on week"
            ? onWeek.map((item, index) => (
                <Card
                  key={index}
                  name={item.dayOfWeek + "," + item.date + " " + item.month}
                  imgSrc={item.weatherLogo}
                  tempMin={item.minTemperature}
                  tempMax={item.maxTemperature}
                />
              ))
            : onDay.map((item, index) => (
                <Card
                  key={index}
                  name={item.time}
                  imgSrc={item.weatherLogo}
                  tempMax={item.temperature}
                />
              ))}
        </div>
      </div>
      <button
        className="right-arrow"
        onClick={rightOffset}
        disabled={isDisabledRightArrow}
      >
        <svg
          width="38 "
          height="38 "
          viewBox="0 0 38 38 "
          fill="none "
          className="arrow"
        >
          <circle cx="19 " cy="19 " r="19 " />
          <path
            d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5 "
            strokeWidth="3 "
          />
        </svg>
      </button>
    </div>
  );
}
