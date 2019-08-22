import React from "react";


export class NaverLogin extends React.Component {
  componentDidMount() {
    var client_id = "iBnKRv2AyH0GvuOZcV2A";
    var redirectURI = encodeURI("https://www.everytrend.kr/callback");
    // var naverLogin = new window.naver.LoginWithNaverId({
    //   clientId: "iBnKRv2AyH0GvuOZcV2A",
    //   callbackUrl: "https://everytrend.kr/callback",
    //   isPopup: true /* 팝업을 통한 연동처리 여부 */,
    //   loginButton: {
    //     color: "white",
    //     type: 2,
    //     height: 40
    //   } /* 로그인 버튼의 타입을 지정 */
    // });

    // /* 설정정보를 초기화하고 연동을 준비 */
    // naverLogin.init();
    var naver_id_login = new window.naver_id_login(client_id, redirectURI)
    
    var state = naver_id_login.getUniqState();
        naver_id_login.setButton("white", 2,40);
        naver_id_login.setDomain("https://www.everytrend.kr");
        naver_id_login.setState(state);
        // naver_id_login.setPopup();
        naver_id_login.init_naver_id_login();
  }

  render() {
    return <div id="naver_id_login" />;
  }
}

export default NaverLogin;
