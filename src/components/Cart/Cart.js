// Cart components should render all the Cart items and display the total amount.

import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}

      {/*the total amount*/}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.66</span> {/*will be derived dynamically later*/}
      </div>

      {/*the actions for the Cart*/}
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button> {/**/}
        {/*we will only render the Order button when we have items in the Cart*/}
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
