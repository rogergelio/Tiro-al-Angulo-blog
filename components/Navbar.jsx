import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { SiTiktok, SiInstagram, SiTwitter, SiSpotify} from "react-icons/si";

const MENU_LIST = [
  { text: <SiTiktok/>, href: "https://www.tiktok.com/@tiroalangulo7" },
  { text: <SiSpotify/>, href: "https://open.spotify.com/show/2d1wx74ZuP3F3elNOtOFIu" },
  { text: <SiTwitter/>, href: "https://twitter.com/angulo_tiro" },
  { text: <SiInstagram/>, href: "https://www.instagram.com/tiroalangulo7/?hl=en" },
  { text: "Nosotros", href: "/nav/us" },
  //{ text: "Resultados", href: "/nav/results" },
  { text: "Autores", href: "/nav/authors" },
  
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href="/">
          <div className="navTitle ml-2 text-neutral-200 hover:text-dark-green ">
            <span className="tal cursor-pointer font-bold text-2xl sm:text-4xl ">
              Tiro al Ángulo
            </span>
            <h1 className="cursor-pointer font-semi text-s mb-1">
              El blog 100% pambolero
            </h1>
          </div>
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${navActive ? "active" : ""} nav__menu-list rounded:lg`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
