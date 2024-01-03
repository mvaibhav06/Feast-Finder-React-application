import React from "react";
import { GiMeal } from "react-icons/gi";

const Meal = ({ handleClick }) => {
  return (
    <div className="container meal mt-4">
      <h3 style={{ fontSize: "2rem" }}>Feeling hungry?</h3>
      <p style={{ fontSize: "1.5rem" }}>Get a random meal by clicking below</p>
      <button className="btn btn-info mt-2" onClick={handleClick}>
        Get Meal <GiMeal />
      </button>
    </div>
  );
};

export default Meal;
