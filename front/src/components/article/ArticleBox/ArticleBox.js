import React from "react"
import "./ArticleBox.css"

import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ArticleBox = props => {
    return(
        <div className="article-box">
            <div className="title"> 스티븐유(유승준) 입국금지 다시 해주세요. 국민 대다수의 형평성에 맞지 않고 자괴감이 듭니다.</div>
            <div className="info-box">
                <div className="date-box">
                    19.08.20
                </div>
                <div className="like-box">
                    <div className="like-count">
                        <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
                        <span>20명</span>
                    </div>
                    <div className="unlike-count">
                        <FontAwesomeIcon icon={faThumbsDown} className="icon"/>
                        <span>25명</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox;