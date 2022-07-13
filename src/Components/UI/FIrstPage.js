import classes from "./FirstPage.module.css";

function FirstPage(props) {
  return <div className={classes.firstPage}>{props.children}</div>;
}

export default FirstPage;
