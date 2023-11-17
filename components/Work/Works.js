import React, { useState, useEffect } from "react";
import { dataUrl } from "@/public/data/url";
import Cards from "../Cards/Cards";
import { Roboto } from "@next/font/google";
import Carrousel from "../Carousel/Carrousel";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function Works() {
  return (
    <div className={`container-work ${roboto.className}`}>
      <h2 className="work-title">projects i've worked on</h2>
      <div className="work">
        <Carrousel />
      </div>
    </div>
  );
}
