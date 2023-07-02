import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      {/* this one will wrap the icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>

      {/* this one will be the text */}
      <span>Your Cart</span>

      {/* I wanna output the total amount of items in the cart */}
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
