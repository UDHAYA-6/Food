import React from "react";
import classes from "./hotel.module.css";
import StarIcon from "@mui/icons-material/Star";
const HotelFood = () => {
  return (
    <>
      <center>
        <h1>Food from top restaurants</h1>
      </center>
      <div className={classes.container}>
        <div>
          <img
            src="/lunch1.jpg"
            height={200}
            width={300}
            style={{ borderRadius: "15px" }}
          />
          <div style={{ marginLeft: "0.7rem" }}>
            <h3 style={{ margin: "0%" }}>Sangeeth Hotel</h3>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <StarIcon color="success" fontSize="small" />
              <h5 style={{ margin: "0%" }}>4.4 34mins</h5>
            </span>
            <div>
              <p className={classes.add}>
                South Indian,North Indian, Chinese, urappakam
              </p>
            </div>
          </div>
        </div>
        {/* Menu Number 2 */}
        <div>
          <img
            src="/lunch2.jpg"
            height={200}
            width={300}
            style={{ borderRadius: "15px" }}
          />
          <div style={{ marginLeft: "0.7rem" }}>
            <h3 style={{ margin: "0%" }}>Dominos pizza</h3>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <StarIcon color="success" fontSize="small" />
              <h5 style={{ margin: "0%" }}>4.5 10mins</h5>
            </span>
            <div>
              <p className={classes.add}>
                Greek,Detroit,Sicilian,Meat, Chicago-style
              </p>
            </div>
          </div>
        </div>
        {/* Menu Number 3 */}
        <div>
          <img
            src="/lunch3.jpg"
            height={200}
            width={300}
            style={{ borderRadius: "15px" }}
          />
          <div style={{ marginLeft: "0.7rem" }}>
            <h3 style={{ margin: "0%" }}>Palmshore</h3>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <StarIcon color="success" fontSize="small" />
              <h5 style={{ margin: "0%" }}>4.0 55mins</h5>
            </span>
            <div>
              <p className={classes.add}>
                Texas, Carolina, Kansas,Memphis,Smokers
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "90%" }}></hr>
    </>
  );
};

export default HotelFood;
