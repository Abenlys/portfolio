import React, { useState } from "react";
import Search from "../Search/Search";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { OPENWEATHER_API_URL, OPENWEATHER_KEY } from "@/api/api";
import { useColorContext } from "@/hooks/Colorcontext";
import Image from "next/image";

export default function Weather() {
  //laisse moi l'espace abruti de vscode
  const [currentWeather, setCurrentWeather] = useState(null);
  const {isJedi} = useColorContext()

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPENWEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`
    );
    currentWeatherFetch
      .then(async (response) => {
        const weatherResponse = await response.json();
        setCurrentWeather(weatherResponse);
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);

  return (
    <div className="container-weather">
      <div className="weather2">
        <h3 className="weather2__title">weather. </h3>
        <Image
            src={`${
              "/images/r2d2color.png"
            }`}
            alt={`${"R2D2"}`}
            width={20}
            height={20}
            priority
          />
      </div>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}
