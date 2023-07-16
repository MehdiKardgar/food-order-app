// We wanna handle the form submission, so when the button is clicked and when the form is submitted, we in the end wanna, add that item to the cart.

import { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true); // control whether this form is valid or not
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // to make sure that browser default of reloading the page is prevented

    const enteredAmount = amountInputRef.current.value; // That value is always a string
    const enteredAmountNumber = +enteredAmount; // convert it to a number

    // if check for validation
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
