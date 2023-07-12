import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const nomberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* this one will wrap the icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>

      {/* this one will be the text */}
      <span>Your Cart</span>

      {/* I wanna output the total amount of items in the cart */}
      <span className={classes.badge}>{nomberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
