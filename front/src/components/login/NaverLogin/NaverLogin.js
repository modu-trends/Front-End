import React from "react";

var client_id = "iBnKRv2AyH0GvuOZcV2A";
var redirectURI = encodeURI("http://localhost:3000/callback");

export class NaverLogin extends React.Component {
  componentDidMount() {
    var naverLogin = new window.naver.LoginWithNaverId({
      clientId: "iBnKRv2AyH0GvuOZcV2A",
      callbackUrl: "http://localhost:3000/callback",
      isPopup: true /* 팝업을 통한 연동처리 여부 */,
      loginButton: {
        color: "white",
        type: 2,
        height: 40
      } /* 로그인 버튼의 타입을 지정 */
    });

    /* 설정정보를 초기화하고 연동을 준비 */
    naverLogin.init();
  }

  render() {
    return <div id="naverIdLogin" />;
  }
}

// class Success extends React.Component {
//   state = {
//     nickname: ""
//   };

//   constructor(props) {
//     super(props);
//     window.naverSignInCallback = this.naverSignInCallback.bind(this);
//   }

//   naverSignInCallback() {
//     var naver_id_login = new window.naver_id_login(client_id, redirectURI);
//     this.setState({
//       nickname: naver_id_login.getProfileData("nickname")
//     });
//   }

//   componentDidMount() {
//     var naver_id_login = new window.naver_id_login(client_id, redirectURI);
//     console.log(naver_id_login.oauthParams.access_token);
//     naver_id_login.get_naver_userprofile("naverSignInCallback()");
//   }

//   render() {
//     return <div>환영합니다 {this.state.nickname}님</div>;
//   }
// }

// export { NaverLogin, Success };
export default NaverLogin;
