import React, { useState } from "react";
import "./CaloriesFixed.scss";

const CaloriesFixed = ({ total }) => {
  const [caloriesFixedVisible, setCaloriesFixedVisible] = useState(false);

  document.onscroll = () => {
    if (document.documentElement.scrollTop > 150) {
      setCaloriesFixedVisible(true);
    } else {
      setCaloriesFixedVisible(false);
    }
  };

  return (
    <div className={`Calories-Fixed ${caloriesFixedVisible && "visible"}`}>
      {total}
    </div>
  );
};

export default CaloriesFixed;
