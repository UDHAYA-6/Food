import { orderReducer } from "./reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  order: orderReducer,
});

export default rootReducer;
