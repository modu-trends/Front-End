import React,{Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchLogout } from "../../../actions/index"

import "./Header.css";
import logo from "../../../assets/images/logo_2.svg";

import NaverLogin from "../../login/NaverLogin";

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
 

class Header extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
 

  constructor(props){
    super(props);

    this.logoutEvent= this.logoutEvent.bind(this);

    this.state = {  scroll: true };
  }
  
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scroll = window.scrollY < 100;
      if (scroll !== this.state.scroll ) {
          this.setState({ scroll })
      }
    });
  }

  logoutEvent(){
    console.log("Event: Logout Button Click");
    const {cookies} = this.props;
    
    cookies.remove('token', { path: '/' });


    this.props.fetchLogout();
    console.log("Event: Logout Button SUCCESS");

  }

  render(){
    return( 
      <div className={this.state.scroll ? 'header' : 'header-s'} >
        {/* "header" */}
        <div className="header-content">
          <div className="header-topbar">
            <div className="header-topbar-left">
              <Link to={"/"}>
                <img src={logo} className="logo" id="logo" alt="logo" />
              </Link>
            </div>
            <div className="header-topbar-right">
              {this.props.token ? <button className="logout-button" onClick={this.logoutEvent}>로그아웃</button> : <NaverLogin />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// export default withCookies(Header);
export default connect(
  state => ({
    token: state.lists.token
  }),
  { fetchLogout }
)(withCookies(Header));