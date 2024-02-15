import React, { useState } from "react";
import classes from "./billing.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Quantity, Reset } from "@/store/reducer";
import ButtonGroup from "@mui/material/ButtonGroup";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Billing = (props) => {
  const [Content, setContent] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.order.Foods);
  const food = data.filter((item) => {
    return item.Ordered == 1;
  });
  console.log(food.length);
  const ChangeQuantity = (input1, input2) => {
    dispatch(Quantity({ input1, input2 }));
  };
  const ChangeContent = () => {
    dispatch(Reset());
    setContent(true);
  };
  const HandleClose = () => {
    setContent(false);
    props.close();
  };
  let final_amount = 0;
  food.map((item) => {
    final_amount = final_amount + item.Quantity * item.Price;
  });
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Order Summary</h3>
        <span onClick={HandleClose} className={classes.x}>
          X
        </span>
      </div>
      {!Content ? (
        <div>
          {food.map((item, index) => (
            <div key={index + 1} className={classes.box}>
              <img
                src={item.img}
                height={80}
                width={80}
                className={classes.img}
              />
              <div className={classes.desc}>
                <h4>{item.Name}</h4>
                <h4>
                  {item.Quantity} x {item.Price}
                </h4>
                <div className={classes.btnComponent}>
                  <ButtonGroup variant="outlined" size="small">
                    <Button
                      onClick={() => {
                        ChangeQuantity("-", item.id);
                      }}
                    >
                      -
                    </Button>

                    <Button color="info">{item.Quantity}</Button>
                    <Button
                      size="small"
                      onClick={() => {
                        ChangeQuantity("+", item.id);
                      }}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <span className={classes.price}>
                    <span>
                      <CurrencyRupeeIcon fontSize="small" />
                    </span>
                    <span> {+item.Quantity * +item.Price}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
          {food.length >= 1 ? (
            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={ChangeContent}
            >
              Pay {final_amount}
            </Button>
          ) : (
            <h2>Your cart is empty😔</h2>
          )}
        </div>
      ) : (
        <h2>Thanks for your order</h2>
      )}
    </div>
  );
};

export default Billing;
