import React from "react";
import { useColorContext } from "../../hooks/Colorcontext";
import Image from "next/image";
import Weather from "../Weather/Weather";

export default function NewsBulletin() {
  const { isJedi, setIsJedi } = useColorContext();
  return (
    <div className="container-news-weather">
      <div
        className={`news-weather boxshadow ${isJedi ? "resistance" : "empire"}`}
      >
        <div className="news-weather__title">
          <h3>news. </h3>
          <Image
            src={`${
              isJedi ? "/images/r2d2color.png" : "/images/r2d2black.png"
            }`}
            alt={`${isJedi ? "R2D2 de la resistance" : "R2D2 de l'empire"}`}
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="news-weather__imagetext">
          <Image
            src="/images/donutdip.jpg"
            alt="Empire sandwhich shop"
            width={150}
            height={150}
            priority
          />
          <p>{`in the middle rim, on the planet bracca, a sandwich shop is being built ${
            isJedi
              ? " by those damned imperialists. the sandwich shop has been built on a river and threatens the ecological balance of the entire region. thousands of us demonstrated that day against the project. many of us were massacred or put in prison. the flame of resistance will never be extinguished! "
              : " for our loyal empire employees. a few demonstrators hostile to the project and loyal to the resistance have been taken prisoner. the empire's expansion is inevitable! glory to the empire!"
          }`}</p>
        </div>
      </div>
      <div
        className={`news-weather boxshadow ${isJedi ? "resistance" : "empire"}`}
      >
        <div className="news-weather__title">
          <h3>weather. </h3>
          <Image
            src={`${
              isJedi ? "/images/r2d2color.png" : "/images/r2d2black.png"
            }`}
            alt={`${isJedi ? "R2D2 de la resistance" : "R2D2 de l'empire"}`}
            width={20}
            height={20}
            priority
          />
        </div>
        <Weather />
      </div>
    </div>
  );
}
