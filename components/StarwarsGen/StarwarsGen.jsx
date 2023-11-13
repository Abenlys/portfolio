
import React, { useEffect, useState } from "react";

export default function StarwarsGen({ workDetail }) {

  const [isAnimationActive, setAnimationActive] = useState(false)

  const handleButtonClick = () => {
    setAnimationActive(!isAnimationActive)
  }

  const handleAnimationEnd = () => {
    setAnimationActive(false)
  }
  return (
    <div className="generique">
      <button className="generique__button button" onClick={handleButtonClick}>Animate on/off</button>
      <div className={`a-long-time-ago2 ${isAnimationActive ? "animate-longtime" : ""}`}>
        <p>{workDetail.longtimeago}</p>
        <p>{workDetail.faraway}</p>
      </div>
      <div className={`crawl2 ${isAnimationActive ? "animate-crawl crawl-test" : ""}`} onAnimationEnd={handleAnimationEnd}>
        <div>
          <p>{workDetail.minidescription}</p>
          <br />
          <p>{workDetail.description}</p>
        </div>
      </div>
    </div>

    
  );
}
