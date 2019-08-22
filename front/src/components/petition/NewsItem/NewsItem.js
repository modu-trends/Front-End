import React from "react";
import "./NewsItem.css";
import { Link } from "react-router-dom";

const NewsItem = props => {
    return(
      <a className="news-item-link" href={`${props.link}`} target="_blank" >
      <div className="news-item">
        <div className="news-item-index">{props.index}.</div>
        <div className="news-item-title" dangerouslySetInnerHTML={{__html: props.title}}></div>
      </div>
      </a>
        
    )
};

export default NewsItem;
