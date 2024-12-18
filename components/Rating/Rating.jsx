import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTable } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ icon, rating }) {
  const totalStars = 5;
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    const starClass = i < rating ? "fa-solid fa-star red" : "fa-solid fa-star";
    stars.push(<FontAwesomeIcon icon={icon} key={i} className={starClass} />);
  }
  return <div className="rating">{stars}</div>;
}
