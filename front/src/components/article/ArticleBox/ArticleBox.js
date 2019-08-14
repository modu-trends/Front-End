import React from "react";
import "./ArticleBox.css";

import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleBox = props => {
  return (
    <div className="article-box">
      <div className="title"> {props.articleData.title}</div>
      <div className="info-box">
        <div className="date-box">{props.articleData.created_at}</div>
        <div className="like-box">
          <div className="like-count">
            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            <span>20명</span>
          </div>
          <div className="unlike-count">
            <FontAwesomeIcon icon={faThumbsDown} className="icon" />
            <span>25명</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;
