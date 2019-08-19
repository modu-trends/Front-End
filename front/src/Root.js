import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/configure";
import { Provider } from "react-redux";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";


const Root = () => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <Router history={createHistory()}>
        <App />
=======
      <Router history = {createHistory()} >
        <App/>
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
      </Router>
    </Provider>
  );
};

export default Root;