import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    Foods: [
      {
        id: "1",
        Name: "Pizza",
        Price: 199,
        img: "/lunch2.jpg",
        Ordered: undefined,
        Hotel: "Dominos pizza",
        km: "2.0km",
        Quantity: 0,
      },
      {
        id: "2",
        Name: "Fish",
        Price: 400,
        img: "/fish.jpg",
        Ordered: undefined,
        Hotel: "Sangeetha Hotel",
        km: "1.1km",
        Quantity: 0,
      },
      {
        id: "3",

        Name: "Noodles",
        Price: 250,
        img: "/noodles.jpg",
        Ordered: undefined,
        Hotel: "Punjabi Nation",
        km: "3.0km",
        Quantity: 0,
      },
      {
        id: "4",

        Name: "Hot chicken",
        Price: 550,
        img: "/lunch3.jpg",
        Ordered: undefined,
        Hotel: "SS Hyderabad",
        km: "2.2km",
        Quantity: 0,
      },
      {
        id: "5",

        Name: "Cheese pasta",
        Price: 340,
        img: "/pasta.jpg",
        Ordered: undefined,
        Hotel: "Palmshore",
        km: "2.0km",
        Quantity: 0,
      },
      {
        id: "6",

        Name: "Briyani",
        Price: 350,
        img: "/briyani.jpg",
        Ordered: undefined,
        Hotel: "Buhari",
        km: "7.0km",
        Quantity: 0,
      },
      {
        id: "7",

        Name: "Veg full meals",
        Price: 250,
        img: "/lunch1.jpg",
        Ordered: undefined,
        Hotel: "A2B restaurant",
        km: "3.0km",
        Quantity: 0,
      },
      {
        id: "8",

        Name: "Chapathi",
        Price: 25,
        img: "/food2.png",
        Ordered: undefined,
        Hotel: "Punjabi Nation",
        km: "4.0km",
        Quantity: 0,
      },
      {
        id: "9",

        Name: "Samosa",
        Price: 20,
        img: "/samosa.jpg",
        Ordered: undefined,
        Hotel: "Ariya Bhavan",
        km: "4.0km",
        Quantity: 0,
      },
    ],
  },
  reducers: {
    Ordering: (state, action) => {
      state.Foods.map((item) => {
        if (item.id == action.payload) {
          if (item.Ordered == undefined) {
            item.Ordered = 1;
            item.Quantity = 1;
          } else {
            item.Ordered = undefined;
            console.log(item);
            item.Quantity = 0;
          }
        }
      });
    },
    Quantity: (state, action) => {
      state.Foods.map((item) => {
        const { input1, input2 } = action.payload;

        if (item.id == input2) {
          if (input1 == "+") {
            item.Quantity = item.Quantity + 1;
          } else if (input1 == "-" && item.Quantity == 1) {
            item.Quantity = 0;
            item.Ordered = undefined;
          } else if (input1 == "-") {
            item.Quantity = item.Quantity - 1;
          }
        }
      });
    },
    Reset: (state) => {
      state.Foods.map((item) => {
        item.Ordered = undefined;
        item.Quantity = 0;
      });
    },
  },
});

export const { Ordering, Quantity, Reset } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
