import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../hooks/Context";

export default function WindAngle() {
  const [direction, setDirection] = useState("С");
  const [ang, setAng] = useState(0);
  const { actualCity } = useContext(CustomContext);
  const angle = actualCity?.wind?.deg + 45;

  const wind_angle = {
    transform: `rotate(${angle}deg)`,
    transition: "all 0.5s ease",
  };

  const changeDirection = (ang) => {
    const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];
    switch (true) {
      case ang > 0 && ang < 90:
        setDirection(directions[1]);
        break;
      case ang === 90:
        setDirection(directions[2]);
        break;
      case ang > 90 && ang < 180:
        setDirection(directions[3]);
        break;
      case ang === 180:
        setDirection(directions[4]);
        break;
      case ang > 180 && ang < 270:
        setDirection(directions[5]);
        break;
      case ang === 270:
        setDirection(directions[6]);
        break;
      case ang > 270 && ang < 360:
        setDirection(directions[7]);
        break;
      default:
        setDirection(directions[0]);
        break;
    }
  };
  useEffect(() => {
    setAng(actualCity?.wind?.deg);
  }, [actualCity?.wind?.deg]);

  useEffect(() => {
    changeDirection(ang);
  }, [ang]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        style={wind_angle}
      >
        <circle cx="19" cy="19" r="19" fill="#48484A" />
        <path
          d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z"
          fill="#E6E6E6"
        />
      </svg>
      <span>{direction}</span>
    </>
  );
}
