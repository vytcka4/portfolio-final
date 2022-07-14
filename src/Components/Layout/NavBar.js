import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

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
        <Link
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={classes.linkNav}
        >
          Contact info
        </Link>
        <Link
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
          className={classes.linkNav}
        >
          About me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
          className={classes.linkNav}
        >
          Projects
        </Link>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-20}
          duration={800}
          className={classes.linkNav}
        >
          Home
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
