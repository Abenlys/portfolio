import Image from "next/image";
import React, { useState } from "react";
import { skillsList } from "./SkillsList";

export default function Skills() {
  //state
  const [hoveredIcon, setHoveredIcon] = useState(null);

  //comportement
  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const defaultTitle = "skills";
  const dynamicTitle = hoveredIcon ? `${hoveredIcon.name}` : defaultTitle;
  return (
    <section className="skills">
      
      <h2 className="title-dynamic">
        my{" "}
        <span
          className="word"
          style={{ color: hoveredIcon ? hoveredIcon.color : "white" }}
        >
          {dynamicTitle}
        </span>
        <span>,</span>
        <br />
        my way
      </h2>
    
      
        <ul className="grid">
          {skillsList.map((item, index) => (
            <li
              className="grid__agencement"
              key={index}
              onMouseEnter={() => handleIconHover(item)}
              onMouseLeave={() => handleIconHover(null)}
            >
              <Image
                src={`/images/skills-icons/${item.name}.svg`}
                alt={item.name}
                fill
                priority
              />
            </li>
          ))}
        </ul>
      
    </section>
  );
}
