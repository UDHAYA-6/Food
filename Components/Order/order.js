import React, { useState } from "react";
import classes from "./order.module.css";
import { Button } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector, useDispatch } from "react-redux";
import { Ordering } from "@/store/reducer";
const Order = () => {
  const dispatch = useDispatch();
  const Foods = useSelector((state) => state.order.Foods);
  const [btn, setbtn] = useState("Add to cart");
  const ButtonCLick = (id) => {
    dispatch(Ordering(id));
  };
  return (
    <>
      <div className={classes.heading}>
        <h1>Place your order now</h1>
      </div>
      <div className={classes.container}>
        {Foods.map((item, index) => (
          <div className={classes.box} key={index + 1}>
            <img
              src={item.img}
              height={120}
              width={120}
              className={classes.img}
            />
            <span style={{ opacity: 0.9, paddingTop: "0.5rem" }}>
              <h2 style={{ margin: "0%" }}>{item.Name}</h2>
              <h3 style={{ margin: "0%" }}>{item.Hotel}</h3>
              <h4 style={{ margin: "0%" }}>{item.km}</h4>
              <div>
                <span>
                  <Button size="small">
                    <CurrencyRupeeIcon />
                    {item.Price}
                  </Button>
                </span>
                <span>
                  <Button
                    disableRipple
                    color={item.Ordered == undefined ? "primary" : "error"}
                    variant="contained"
                    size="small"
                    onClick={() => ButtonCLick(item.id)}
                  >
                    {item.Ordered == undefined ? "Add" : "Remove"}
                  </Button>
                </span>
              </div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Order;
