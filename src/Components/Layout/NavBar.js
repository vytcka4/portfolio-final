import React, { useRef } from "react";
import classes from "./Navbar.module.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = React.forwardRef(function Navbar(props, ref) {
  const navRef = useRef();
  const responsiveNav = () => {
    navRef.current.classList.toggle(`${classes.responsiveBtn}`);
  };

  return (
    <header>
      <nav ref={ref} className={classes["nav"]}>
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
        <button className={classes.responsiveBtn}>
          <FaTimes onClick={responsiveNav} />
        </button>
      </nav>
      <button className={classes.responsiveBtn}>
        <FaBars onClick={responsiveNav} />
      </button>
    </header>
  );
});

export default Navbar;
