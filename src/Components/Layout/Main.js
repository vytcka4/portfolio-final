import classes from "./Main.module.css";
import image from "../store/dev.png";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function Main() {
  return (
    <main className={classes["main"]}>
      <div className={classes.mainInfo}>
        <div className={classes.text}>
          <h1>Hi I'm Vytautas Sidabras,</h1>
          <h2>I'm front end developer</h2>
        </div>
        <div className={classes.allButtons}>
          <button className={classes.projectBtn}>Projects</button>
          <button>
            <TbBrandLinkedin className={classes.icons}></TbBrandLinkedin>
          </button>
          <button>
            <FaGithub className={classes.icons} />
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
