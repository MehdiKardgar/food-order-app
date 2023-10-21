// bringing the actual list of meals to the screen

import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState(null); // when we fetch data and we fail, I set my error.

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-3960f-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      //  find out if "fetch data" failed
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json(); // parse data

      const loadedMeals = [];

      for (const key in responseData) {
        // With this, we're transforming the fetched data.
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false); // because we're not loading anymore
      setHttpError(error.message);
    });
  }, []);

  //  set Loading text before I tried to map my meals
  if (isloading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
