// It will be a wrapper component, which provides some HTML structure and some CSS code for any content you want.
// this is a component which could be used in very different places throughout the application.

import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
