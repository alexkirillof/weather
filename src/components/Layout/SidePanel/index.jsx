import React, { useContext, useState } from "react";
import { CustomContext } from "../../../hooks/Context";
import Button from "../../Button";
import NowDate from "../../NowDate";
import ModalPanel from "../ModalPanel";
import "./style.css";

export default function SidePanel({ changeTheme }) {
  const [isActive, setIsActive] = useState(false);
  const { actualCity } = useContext(CustomContext);
  const showModal = () => {
    setIsActive(true);
  };
  return (
    <aside className="side-panel">
      <div className="side-panel__header">
        <Button onClick={showModal} name="btn__show ">
          Поиск города
        </Button>
        <div className="checkbox-group">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={changeTheme}
          />
          <label htmlFor="checkbox" className="checkbox-lable">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path
                className="path-moon"
                transform="translate(-6, -6)"
                d="M19.6067
                11.1213C18.8345 10.3492 17.8969 9.8358 16.9126 9.57276C17.4472
                11.5753 16.9338 13.7942 15.364 15.364C13.7943 16.9337 11.5754
                17.4471 9.57283 16.9125C9.83587 17.8968 10.3492 18.8344 11.1214
                19.6066C13.4633 21.9485 17.2647 21.9485 19.6067 19.6066C21.9486
                17.2647 21.9486 13.4633 19.6067 11.1213Z"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="side-panel__body body-side-panel">
        <div className="bg-clouds">
          <img src="images/cloud_bg.png " alt="clouds-bg " className="clouds" />
          <img
            src={`https://openweathermap.org/img/wn/${actualCity?.weather?.[0]?.icon}@2x.png`}
            alt="weather-img "
            className="snowflake-img"
          />
        </div>
        <div className="body-side-panel-info">
          <div className="body-side-panel-info__temperature">
            <span>{actualCity?.main?.temp?.toFixed()}</span>
            <span>°C</span>
          </div>
          <div className="body-side-panel-info__weather">
            <p className="description">
              {actualCity?.weather?.[0]?.description}
            </p>
            <p className="secondary-text">
              Ощущается как {actualCity?.main?.feels_like?.toFixed()}
            </p>
          </div>
        </div>
      </div>
      <div className="body-side-panel-footer">
        <NowDate />
        <div className="body-side-panel-footer__location">
          <span className="secondary-text location">{actualCity?.name}</span>
        </div>
      </div>

      <ModalPanel isShow={isActive} setIsShow={setIsActive}></ModalPanel>
    </aside>
  );
}
