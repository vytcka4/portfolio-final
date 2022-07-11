import React, { useRef } from "react";
import classes from "./Navbar.module.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = function Navbar(props) {
  const navRef = useRef();
  const responsiveNav = () => {
    navRef.current.classList.toggle(`${classes.responsiveBtn}`);
  };

  return (
    <header className={classes.header}>
      <button className={classes.navBtn} onClick={responsiveNav}>
        <FaBars />
      </button>
      <nav ref={navRef} className={classes["nav"]}>
        <a className={classes.linkNav} href="#contact-container">
          Contact infos
        </a>
        <a className={classes.linkNav} href="#about-tittle">
          About me
        </a>
        <a className={classes.linkNav} href="#projects-tittle">
          Projects
        </a>
        <a className={classes.linkNav} href="main">
          Home
        </a>
        <button className={classes.navBtn} onClick={responsiveNav}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
