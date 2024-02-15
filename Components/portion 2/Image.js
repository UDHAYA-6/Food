import React from "react";
import classes from "./image.module.css";

const Image = () => {
  return (
    <div className={classes.div}>
      <div className={classes.container}>
        <span>
          Spice Delight,<br></br> Every Bite's <br></br>Just Right
        </span>
        <img src="/snack.png" className={classes.snack} height={450} />
      </div>
    </div>
  );
};

export default Image;
