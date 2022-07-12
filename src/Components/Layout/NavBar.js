import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = function Navbar(props) {
  const [responsiveNavState, setResponsiveNavState] = useState();
  const responsiveHandler = () => {
    setResponsiveNavState((state) => !state);
  };

  let responsive;
  let hidden;
  let responsiveHeader;

  if (responsiveNavState === true) {
    responsive = classes.responsive;
    hidden = classes.hidden;
    responsiveHeader = classes.responsiveHeader;
  } else {
    responsive = "";
    hidden = "";
    responsiveHeader = "";
  }

  return (
    <header className={`${classes.header} ${responsiveHeader}`}>
      <button
        className={`${classes.navBtn} ${hidden}`}
        onClick={responsiveHandler}
      >
        <FaBars />
      </button>
      <nav className={`${classes["nav"]} ${responsive}`}>
        <button
          className={`${classes.navBtn} ${classes.navBtnClose} `}
          onClick={responsiveHandler}
        >
          <FaTimes />
        </button>
        <a className={classes.linkNav} href="#contact-container">
          Contact info
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
      </nav>
    </header>
  );
};
export default Navbar;
