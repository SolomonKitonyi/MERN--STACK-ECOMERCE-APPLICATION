import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import { authReducer, userReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
});

let initialState = {};

const middileware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middileware))
);

export default store;
