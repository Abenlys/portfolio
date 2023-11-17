import React, { useEffect, useState } from "react";
import { navbarList } from "./navbarList";
import Image from "next/image";
import { useColorContext } from "../../hooks/Colorcontext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  //State
  const [menuOpen, setMenuOpen] = useState(false);
  const { isJedi } = useColorContext();
  const router = useRouter();

  // Comportement
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Render
  return (
    <div className="navbar-container">
      <section
        className={`navbar boxshadow ${isJedi ? "navbar-jedi" : "navbar-sith"}`}
      >
        <div className="navbar__logo">
          <p>TomRam.</p>
          <div className="navbar__logo__img">
            {isJedi ? (
              <Image
                src="/images/jedi-order.png"
                alt="jedi-order"
                width={20}
                height={20}
                quality={75}
                priority={true}
              />
            ) : (
              <Image
                src="/images/minidarkblack.svg"
                alt="minidarkVador"
                width={20}
                height={20}
                quality={75}
                priority={true}
              />
            )}
          </div>
        </div>
        <ul className="navbar__list">
          {navbarList.map((item, index) => (
            <li key={index}>
              <Link
                href={`/#${item}`}
                className={`${isJedi ? "yellow" : "black"}`}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <label className={`hamburger-menu ${isJedi ? "" : "black"}`}>
          <input type="checkbox" onClick={handleMenu} />
        </label>
      </section>
      {menuOpen ? (
        <ul
          className={`navbar-responsive ${
            isJedi ? "navbar-jedi" : "navbar-sith"
          }`}
        >
          {navbarList.map((item, index) => (
            <li key={index}>
              <a
                className={`${isJedi ? "yellow" : "black"}`}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/#${item}`);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
