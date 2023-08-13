import React, { useContext } from "react";
import { CustomContext } from "../../hooks/Context";
import Loader from "../Loader/index";
import "./style.css";

export default function Card({ name, imgSrc, tempMax, tempMin }) {
  const { isLoading } = useContext(CustomContext);
  return (
    <div className="card">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="card__card-header">
            <span> {name} </span>
          </div>
          <div className="card__card-body">
            <img src={imgSrc} alt="weather-icon " />
          </div>
          <div className="card__card-footer">
            <span> {tempMax} </span>
            {tempMin ? <span> {tempMin} </span> : null}
          </div>
        </>
      )}
    </div>
  );
}
