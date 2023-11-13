import ChooseYourPath from "@/components/ChooseYourPath/ChooseYourPath";
import DisplayCards from "@/components/DisplayCard/DisplayCards";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Pof from "@/components/Pof/Pof";
import StarwarsGen from "@/components/StarwarsGen/StarwarsGen";
import Tags from "@/components/Tags/Tags";
import { dataUrl } from "@/public/data/url";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function workdetail() {
  // state
  const router = useRouter();
  const { id } = router.query;
  const [workDetail, setWorkDetail] = useState(null);

  useEffect(() => {
    async function fetchWorkDetail() {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const selectedWork = data.find((work) => work.id === id);
        if (!selectedWork) {
          router.push("/");
        }
        setWorkDetail(selectedWork);
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchWorkDetail();
  }, [router.query.id]);
  console.log(workDetail);

  if (!workDetail) {
    return null;
  }
  return (
    <div className="general-wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="static width">
        <ChooseYourPath />
        <Navbar />
      </div>
      <h1
        style={{ color: `${workDetail.title.color}` }}
        className="workdetail-title"
      >
        {workDetail.title.name}
      </h1>
      <div className="container-left-rigth">
        <div className="left">
          <StarwarsGen workDetail={workDetail} />
          <div className="left__link">
            <Link className="link-code" href={workDetail.code} target="blank">
              <button className="button">view code</button>
            </Link>
            <Link className="link-code" href={workDetail.site} target="blank">
              <button className="button">visit website</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <Image
            className="right__image"
            src={workDetail.cover}
            alt={workDetail.title.name}
            fill
          />
        </div>
      </div>
      <section className="view">
        <Pof workDetail={workDetail.theconqueredpowersofforce} />
        <div className="threepics">
          {workDetail.pictures.map((pics, index) => (
            <div key={index} className="threepics__image">
              <img src={pics} alt={workDetail.title.name} />
            </div>
          ))}
        </div>
      </section>
      <DisplayCards currentCardId={id} />
      <Footer />
    </div>
  );
}
