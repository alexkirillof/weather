import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];
  const dayNow = new Date();
  console.log(new Date().getDay());

  const [isLoading, setIsLoading] = useState(false);
  const [actualCity, setActualCity] = useState([]);
  const [weatherOnWeek, setWeatherOnWeek] = useState([]);
  const [pos, setPos] = useState(0);
  // console.log(weatherOnWeek?.list[0]);
  const onDay = [
    {
      time: '15:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[6]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[1]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '16:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[6]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[1]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '17:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[6]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[1]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '18:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[7]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[2]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '19:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[7]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[2]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '20:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[7]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[2]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '21:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[8]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[3]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '22:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[8]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[3]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '23:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[8]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[3]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '00:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[9]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[4]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '01:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[9]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[4]?.main?.temp.toFixed()}°C`,
    },
    {
      time: '02:00',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[9]?.weather[0]?.icon}@2x.png`,
      temperature: `${weatherOnWeek?.list?.[4]?.main?.temp.toFixed()}°C`,
    },
  ];

  const onWeek = [
    {
      dayOfWeek: 'Завтра',
      date: '',
      month: '',
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[5]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[5]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[5]?.main?.temp_max.toFixed()}°C`,
    },
    {
      dayOfWeek: `${days[(dayNow.getDay() + 2) % 7]}`,
      date: ` ${dayNow.getDate() + 2}`,
      month: `${months[dayNow.getMonth()]}`,
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[13]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[13]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[13]?.main?.temp_max.toFixed()}°C`,
    },
    {
      dayOfWeek: `${days[(dayNow.getDay() + 3) % 7]}`,
      date: ` ${dayNow.getDate() + 3}`,
      month: `${months[dayNow.getMonth()]}`,
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[21]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[21]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[21]?.main?.temp_max.toFixed()}°C`,
    },
    {
      dayOfWeek: `${days[(dayNow.getDay() + 4) % 7]}`,
      date: ` ${dayNow.getDate() + 4}`,
      month: `${months[dayNow.getMonth()]}`,
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[29]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[29]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[29]?.main?.temp_max.toFixed()}°C`,
    },
    {
      dayOfWeek: `${days[(dayNow.getDay() + 5) % 7]}`,
      date: ` ${dayNow.getDate() + 5}`,
      month: `${months[dayNow.getMonth()]}`,
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[37]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[37]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[37]?.main?.temp_max.toFixed()}°C`,
    },
    {
      dayOfWeek: `${days[(dayNow.getDay() + 6) % 7]}`,
      date: ` ${dayNow.getDate() + 5}`,
      month: `${months[dayNow.getMonth()]}`,
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[5]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[5]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[5]?.main?.temp_max.toFixed()}°C`,
    },
    {
      dayOfWeek: `${days[(dayNow.getDay() + 7) % 7]}`,
      date: ` ${dayNow.getDate()}`,
      month: `${months[dayNow.getMonth()]}`,
      weatherLogo: `https://openweathermap.org/img/wn/${weatherOnWeek?.list?.[13]?.weather[0]?.icon}@2x.png`,
      minTemperature: `${weatherOnWeek?.list?.[13]?.main?.temp_min.toFixed()}°C`,
      maxTemperature: `${weatherOnWeek?.list?.[13]?.main?.temp_max.toFixed()}°C`,
    },
  ];
  return (
    <CustomContext.Provider
      value={{
        isLoading,
        setIsLoading,
        actualCity,
        setActualCity,
        onDay,
        onWeek,
        setWeatherOnWeek,
        days,
        months,
        dayNow,
        pos,
        setPos,
      }}
    >
      {props.children}
    </CustomContext.Provider>
  );
};
