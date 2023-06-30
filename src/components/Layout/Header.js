// this component will hold my header code
import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      {/* this header using the built in header Component */}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>

      {/* this div will hold the image */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
