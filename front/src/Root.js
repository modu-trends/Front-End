import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/configure";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from 'react-router-scroll-top'



import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 4000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100
  }
}

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)} >
        <CookiesProvider>
          <ScrollToTop>
            <AlertProvider template={AlertTemplate} {...options}>
              <App />
            </AlertProvider>
          </ScrollToTop>
        </CookiesProvider>
      </Router>
    </Provider>
  );
};

export default Root;
