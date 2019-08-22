import React from "react";
import "./DisagreementButton.css";

const DisagreementButton = props => {
    return(
        <button className="button-wrapper" onClick={props.onclick}>
            반대합니다 <br/> <span className="button-count">{props.count}명</span>
        </button>
    )
};

export default DisagreementButton;
