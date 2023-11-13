import { useColorContext } from "@/hooks/Colorcontext";
import Image from "next/image";
import React from "react";

export default function CurrentWeather({data}) {

  const { isJedi } = useColorContext();
  const roundToUnit = (value) => Math.round(value)
  return (
    <div
      className={`weather ${isJedi ? "resistance-weather" : "empire-weather"}`}
    >
      <div className="weather__top">
        <Image
          alt="weather"
          className="weather__top__icon"
          src={`/images/weather-icons/${data.weather[0].icon}.png`}
          width={70}
          height={70}
        />
        <p className="weather__top__degree">{roundToUnit(data.main.temp)}°C</p>
      </div>
      <div className="weather__bottom">
        <div className="weather__bottom__detail">
          <Image
            alt="humidity"
            className="weather__bottom__detail__icon"
            src="/images/humidity.png"
            width={20}
            height={20}
          />
          <div className="weather__bottom__detail__description">
            <p className="weather__bottom__detail__percent">{data.main.humidity}%</p>
            <p className="weather__bottom__detail__descriptif">humidity</p>
          </div>
        </div>
        <div className="weather__bottom__detail">
          <Image
            alt="wind"
            className="weather__bottom__detail__icon"
            src="/images/wind.png"
            width={20}
            height={20}
          />
          <div className="weather__bottom__detail__description">
            <p className="weather__bottom__detail__percent">{roundToUnit(data.wind.speed*3.6)}km/h</p>
            <p className="weather__bottom__detail__descriptif">wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
