import classes from "./AboutMe.module.css";
import Certificates from "./Certificates";
import Skills from "./Skills";

function ABoutMe(props) {
  return (
    <div className={classes.about} id="aboutMe">
      <h2 className={classes.aboutMe}>About me</h2>
      <Skills />
      <Certificates />
    </div>
  );
}

export default ABoutMe;
