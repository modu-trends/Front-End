import React from "react";
import {connect} from "react-redux";

import { fetchLogin } from "../actions/index";

import { withCookies, Cookies } from 'react-cookie';
import axios from "axios";
import { instanceOf } from 'prop-types';

var client_id = "iBnKRv2AyH0GvuOZcV2A";
var redirectURI = encodeURI("https://www.everytrend.kr/callback");

export class NaverLogin extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    
    this.state = {
        accessToken:"",
        userId: ""
    };

    window.naverSignInCallback = this.naverSignInCallback.bind(this);
  }

  naverSignInCallback() {
    var naver_id_login = new window.naver_id_login(client_id, redirectURI);

    const { cookies } = this.props;

    this.setState({
      userId: naver_id_login.getProfileData("id")
    });

    axios.post("/api/login/", {
        userid: this.state.userId,
        token: this.state.accessToken
      }).then(response => {
       
        cookies.set('token', response['data']['token'], { path: '/' });
        
        // token 리덕스에 저장
        this.props.fetchLogin(response['data']['token']);
        // Redirect 
        this.props.props.history.push("/");

    });
  }

  componentDidMount() {
    var naver_id_login = new window.naver_id_login(client_id, redirectURI);

    this.setState({
        accessToken: naver_id_login.oauthParams.access_token
    });

    naver_id_login.get_naver_userprofile("naverSignInCallback()");
  }

  render() {
    return <div>로그인 중...</div>;
  }
}


export default connect(
    state => {
      return {
        token: state.lists.token
      };
    },
    { fetchLogin }
)(withCookies(NaverLogin));
  