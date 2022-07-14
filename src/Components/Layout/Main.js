import classes from "./Main.module.css";
import image from "../store/dev.png";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function Main() {
  return (
    <main className={classes["main"]} id="home">
      <div className={classes.mainInfo}>
        <div className={classes.text}>
          <h1>Hi I'm Vytautas Sidabras,</h1>
          <h2>I'm front end developer</h2>
        </div>
        <div className={classes.allButtons}>
          <button className={classes.projectBtn}>Projects</button>
          <button>
            <a
              href="https://www.linkedin.com/in/vytautas-sidabras-875991204/"
              target="blank"
            >
              <TbBrandLinkedin className={classes.icons}></TbBrandLinkedin>
            </a>
          </button>
          <button>
            <a href="https://github.com/vytcka4" target="blank">
              <FaGithub className={classes.icons} />
            </a>
          </button>
        </div>
      </div>
      <div className={classes.backgroundIcon}>
        <img src={image} alt="dev"></img>
      </div>
    </main>
  );
}

export default Main;
