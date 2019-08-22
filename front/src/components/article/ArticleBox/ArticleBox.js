import React from "react";
import "./ArticleBox.css";

import { Link } from "react-router-dom";

const ArticleBox = props => {
  return (
    <Link to={`/petition/${props.articleData.id}`} className="article">
      <div className="article-box">
        <div className="title" dangerouslySetInnerHTML={{__html: props.articleData.title}} ></div>
        <div className="info-box">
          <div className="category-box">{props.articleCategory}</div>
          <div className="date-box">{props.articleData.created_at}</div>
          <div className="like-box">
            <div className="like-count">
              <span className="icon" >동의</span>
              <span className="icon-count">{props.articleData.agreement}명</span>
            </div>
            <div className="unlike-count">
              <span className="icon" >반대</span>
              <span className="icon-count">{props.articleData.disagreement}명</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleBox;
