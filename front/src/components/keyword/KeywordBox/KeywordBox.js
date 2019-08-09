import React from "react";
import "./KeywordBox.css";

const KeywordBox = props => {
  return (
    <div className="keyword-box">
      <p className="category-title">{props.title}</p>

      {props.data.map((contact, i) => {
        return (
          <div className="keyword-list" key={i}>
            <div className="keyword-list-num">{contact.num}</div>
            <div className="keyword-list-item">{contact.keyword}</div>
          </div>
        );
      })}
    </div>
  );
};

export default KeywordBox;
