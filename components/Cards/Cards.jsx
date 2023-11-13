import { dataUrl } from "@/public/data/url";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useColorContext } from "@/hooks/Colorcontext";
import Image from "next/image";

export default function Cards() {
  //state
  const [workList, setWorkList] = useState([]);
  const [currentwork, setCurrentWork] = useState(0);
  const { isJedi } = useColorContext();

  function nextWork() {
    setCurrentWork((currentwork) => (currentwork + 1) % workList.length);
  }

  function prevWork() {
    setCurrentWork(
      (currentwork) => (currentwork - 1 + workList.length) % workList.length
    );
  }

  //comportement
  useEffect(() => {
    async function fetchWorks() {
      try {
        const reponse = await fetch(dataUrl);
        const data = await reponse.json();
        setWorkList(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchWorks();
  }, []);

  return (
    <>
    <div className="cards">
      <div className={`${isJedi ? "laser-left-blue" : "laser-left-red"}`}>
        <Image
          src={`${
            isJedi
              ? "/images/carousel-icons/falcon.png"
              : "/images/carousel-icons/destroyer.png"
          }`}
          width={100}
          height={100}
          priority
          alt={isJedi ? "falcon" : "destroyer"}
          onClick={prevWork}
          style={{ transform: isJedi ? "rotate(90deg)" : "rotate(-90deg)" }}
        />
      </div>
      <Card work={workList[currentwork]} isWide={true} />
      <div className={`${isJedi ? "laser-rigth-blue" : "laser-rigth-red"}`}>
        <Image
          src={`${
            isJedi
              ? "/images/carousel-icons/falcon.png"
              : "/images/carousel-icons/destroyer.png"
          }`}
          width={100}
          height={100}
          alt={isJedi ? "falcon" : "destroyer"}
          onClick={nextWork}
          style={{ transform: isJedi ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
    </div>
    <div className="dots">
        {workList.map((work, index) => (
          <div
            key={index}
            className={`${index === currentwork ? "active-dot" : "dot"}`}
          ></div>
        ))}
      </div>
    </>
    
  );
}
