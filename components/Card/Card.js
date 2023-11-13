import Image from "next/image";
import React from "react";
import Tags from "../Tags/Tags";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Card({ work, isWide }) {
  const router = useRouter()
  const className = isWide ? 'wide' : ""
  if (!work) {
    return null;
  }
  return (
    <Link
      href={{
        pathname: "/workdetail",
        query: {id: `${work.id}`},
      }}
    >
      <div className={`card ${className}`}>
        <div className="card__image">
          <h2 style={{color:`${work.title.color}`}}>{work.title.name}</h2>
        </div>
        <div className="card__separateur"></div>
        <div className="card__detail">
          <p>{work.minidescription}</p>
          <Tags tags={work.tags} fontsize={13} />
        </div>
      </div>
    </Link>
  );
}
