import Card from "@/components/Card/Card";
import React, { useState, useEffect } from "react";
import { dataUrl } from "@/public/data/url";
import { Carousel } from "react-responsive-3d-carousel";

export default function Carrousel() {
      //state
  const [workList, setWorkList] = useState([]);
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
    <div>
    <Carousel autoPlay={false} depth={1} startIndex={1} >
      {workList.map((work, index) => (
        <div className="item" key={index}>
          <Card work={work} />
        </div>
      ))}
    </Carousel>
  </div>
  )
}
