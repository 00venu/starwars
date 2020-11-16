import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import LoginReducer from "./store/reducers/loginReducer";
import SearchReducer from "./store/reducers/searchReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  search: SearchReducer,
});
const saveToLocalStorage = (state) => {
  const dataState = JSON.stringify(state);
  localStorage.setItem("state", dataState);
};

const loadLocalstorage = () => {
  const dataState = localStorage.getItem("state");
  if (dataState === null || dataState === undefined) return undefined;
  if (dataState) return JSON.parse(dataState);
};

const dataFromLocalstore = loadLocalstorage();

const store = createStore(
  rootReducer,
  dataFromLocalstore,
  applyMiddleware(ReduxThunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
