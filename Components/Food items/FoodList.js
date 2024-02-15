import React from "react";
import classes from "./list.module.css";
const FoodList = () => {
  return (
    <div>
      <h1 className={classes.que}>Have you not had your breakfast yet?</h1>
      <div className={classes.imageDiv}>
        <img className={classes.image} src="/food1.png" height={165} />{" "}
        <img className={classes.image} src="/food2.png" height={210} />{" "}
        <img className={classes.image} src="/food3.png" height={210} />{" "}
        <img className={classes.image} src="/food6.png" height={170} />{" "}
        <img className={classes.image} src="/food4.png" height={210} />{" "}
      </div>
      <div className={classes.Foodname}>
        <p>Panner </p>
        <p>Chapathi</p>
        <p>VegCurry</p>
        <p>Pizza</p>
        <p>Noodles</p>
      </div>
    </div>
  );
};

export default FoodList;
