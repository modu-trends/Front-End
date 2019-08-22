import React from "react";
import "./ContentBox.css";

const ContentBox = props => {
    return(
        <div className="content-wrapper">
            <h3 className="title">청원 내용</h3>
            <div className="content" dangerouslySetInnerHTML={{__html: props.content}}></div>
        </div>
    )
};

export default ContentBox;
