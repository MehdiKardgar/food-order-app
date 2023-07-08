// Cart components should render all the Cart items and display the total amount.

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      {/*the total amount*/}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.66</span> {/*will be derived dynamically later*/}
      </div>

      {/*the actions for the Cart*/}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/*we will only render the Order button when we have items in the Cart*/}
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
