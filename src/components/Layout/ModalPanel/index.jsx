import React, { useContext, useEffect, useRef, useState } from "react";
import { CustomContext } from "../../../hooks/Context.jsx";
import Button from "../../Button";
import "./style.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function ModalPanel({ isShow, setIsShow }) {
  const [city, setCity] = useState([]);
  const [input, setInput] = useState("");
  const { isLoading, setIsLoading, setActualCity, setWeatherOnWeek, setPos } =
    useContext(CustomContext);
  const myInputRef = useRef("");
  const [isCityFound, setIsCityFound] = useState(true);
  const [isInput, setIsInput] = useState(false);

  const fetchWeatherOnWeek = async (lon, lat, key) => {
    try {
      setIsLoading(false);
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
      );
      const weatherOnWeekData = await weatherRes.json();
      setWeatherOnWeek(weatherOnWeekData);
      console.log(weatherOnWeekData);
    } catch (error) {
      alert("«Ошибка сервера»");
    }
  };

  const fetchWeather = async (lon, lat, key) => {
    try {
      setIsLoading(false);
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`
      );
      const weatherData = await weatherRes.json();
      console.log(weatherData);
      setActualCity(weatherData);
    } catch (error) {
      alert("«Ошибка сервера»");
    }
  };

  const fetchData = async (query, e) => {
    e?.preventDefault();
    if (isLoading || !query) {
      return;
    }
    setIsLoading(true);
    let pattern = /^[А-Яа-яЁё\s-]+$/;
    let result = pattern.test(query);
    if (result) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`
        );
        const data = await res.json();
        console.log(data);
        if (data[0]) {
          const cities = [
            query,
            ...city.filter((x) => x.toLowerCase() !== query.toLowerCase()),
          ].slice(0, 5);
          setCity(cities);
          setIsCityFound(true);
          setIsShow(false);
          setIsInput(false);
          fetchWeather(data[0].lon, data[0].lat, API_KEY);
          fetchWeatherOnWeek(data[0].lon, data[0].lat, API_KEY);
          setPos(0);
        } else {
          setIsCityFound(false);
        }
      } catch (error) {
        alert("«Ошибка сервера»");
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsCityFound(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("Москва");
  }, []);

  return (
    <div className={`modal-panel ${isShow ? "show" : ""}`}>
      <div className="modal-panel__header header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          className="close-icon"
          onClick={() => {
            setIsShow(false);
            setIsInput(false);
          }}
        >
          <path d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z" />
        </svg>
        <form className="header__form" autoComplete="off" disabled={isLoading}>
          <input
            type="text"
            placeholder={"Название города" || city[0]}
            name="search"
            ref={myInputRef}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => {
              setIsInput(true);
              setIsCityFound(true);
            }}
          />
          <Button
            name="btn__search"
            onClick={(e) => fetchData(myInputRef.current.value.trim(), e)}
            disabled={input.length === 0}
          >
            Найти
          </Button>
        </form>
        {!isCityFound ? (
          <div className="warning">Упс! Город не найден, попробуйте другой</div>
        ) : null}
        <ul className="input-list-items">
          {isInput
            ? city.map((item, index) => (
                <li
                  key={index}
                  className="input-list-items__item-list"
                  onClick={(e) => fetchData(item.trim(), e)}
                >
                  {item}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
