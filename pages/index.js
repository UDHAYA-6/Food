import React from "react";
import NavBar from "@/Components/nav component/nav";
import Image from "@/Components/portion 2/Image";
import FoodList from "@/Components/Food items/FoodList";
import HotelFood from "@/Components/Restaurent/HotelFood";
import Culture from "@/Components/Culture/culture";
import Order from "@/Components/Order/order";
import Footer from "@/Components/Footer/footer";
import { isMobile } from "react-device-detect";
const index = () => {
  return (
    <>
      {!isMobile ? (
        <div>
          <NavBar />
          <Image />
          <FoodList />
          <HotelFood />
          <Culture />
          <Order />
          <Footer />
        </div>
      ) : (
        <center>
          <div
            style={{
              textAlign: "justify",
              width: "70%",
              padding: "10px",
              backgroundColor: "#FFEB3B",
              borderRadius: "10px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <p>
              This application is optimized for PC and desktop. Please use a
              computer for the best experience.
            </p>
          </div>
        </center>
      )}
    </>
  );
};

export default index;
