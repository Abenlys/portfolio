import React, { useEffect, useState } from "react";
import { dataUrl } from "@/public/data/url";
import Card from "../Card/Card";

export default function DisplayCards({currentCardId}) {
  //state
  const [workList, setWorkList] = useState([]);

  //Comportement
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
    <div className="displaycards">
      {workList.filter((work) => work.id !== currentCardId).map((work) => (
        <Card className='displaycards__card' work={work} key={work.id} />
      ))}
    </div>
  );
}
