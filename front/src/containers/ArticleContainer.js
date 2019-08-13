import React, {Component} from 'react'

import ArticleWrapper from "../components/article/ArticleWrapper";
import ArticleBox from "../components/article/ArticleBox";


export class ArticleContainer extends Component {
    render(){
        return(
            <ArticleWrapper>
                <ArticleBox></ArticleBox>
                <ArticleBox></ArticleBox>
                <ArticleBox></ArticleBox>
            </ArticleWrapper>
        )
    }
}

export default ArticleContainer;