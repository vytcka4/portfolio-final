import classes from "./AboutMe.module.css";
import Certificates from "./Certificates";
import Skills from "./Skills";

function ABoutMe(props) {
  return (
    <div className={classes.about}>
      <Skills />
      <Certificates />
    </div>
  );
}

export default ABoutMe;
