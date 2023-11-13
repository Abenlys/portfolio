import React from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Tags({ tags, fontsize }) {
  return (
    <div className={`tags ${roboto.className}`}>
      {tags.map((tag, index) => (
        <div
          className="tags__items button"
          key={index}
          style={{ fontSize: `${fontsize}px` }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
