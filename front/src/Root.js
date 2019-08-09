import React from "react";
import App from "./components/App";

// import { Provider } from "react-redux";
// import store from "store/configure";

import { BrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    // <Provider store={store}>
    //   <App />
    // </Provider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;
