import React from "react"
import "./ArticleWrapper.css"


const ArticleWrapper = ({children}) => {
    return(
        
        <div className="article-wrapper">
            {children}
        </div>
    );
}

 export default ArticleWrapper;