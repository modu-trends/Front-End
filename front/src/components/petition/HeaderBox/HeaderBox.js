import React from "react";
import "./HeaderBox.css";

const HeaderBox = props => {
    return(
  <div className="header-wrapper">
    <h4>- {props.status} -</h4>
    <h2 className="title"dangerouslySetInnerHTML={{__html: props.title}} ></h2>
    <div className="header-flex-box">
        <div className="flex-box">
            <p className="date"><span className="bold">카테고리</span> {props.category}</p>
        </div>
        <div className="flex-box">
            <p className="date"><span className="bold">청원시작</span> {props.created_at}</p>
        </div>
        <div className="flex-box">
            <p className="date"><span className="bold">청원마감</span> {props.finished_at}</p>
        </div>
       
    </div>
  </div>
  )
};

export default HeaderBox;
