import React, { Component } from "react";
import { Main, Search, Petition, NotFound, Login } from "../pages";
import { Switch, Route } from "react-router-dom";

import {connect} from "react-redux";

import { fetchLogin } from "../actions/index" 

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);

    const { cookies } = props;

    if(cookies.get('token') !== false){
      this.props.fetchLogin(cookies.get('token'));
    }

  }

  render() {
    return (
      <Switch >
        <Route path="/" exact={true} component={Main} />
        <Route path="/search/:keyword" exact={true} component={Search} />
        <Route path="/petition/:id" exact={true} component={Petition} />
        <Route path="/callback" component={Login} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

// export default App;
export default connect(
  state => {
    return {
      token: state.lists.token
    };
  },
  { fetchLogin }
)(withCookies(App));

