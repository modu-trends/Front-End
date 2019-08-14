import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/configure";
import { Provider } from "react-redux";
import { BrowserRouter, Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";


const Root = () => {
  return (
    <Provider store={store}>
      <Router history = {createHistory()} >
        <App/>
      </Router>
    </Provider>
  );
};

export default Root;