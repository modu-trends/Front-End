<<<<<<< HEAD
import { FETCH_ARTICLE, FETCH_KEYWORD } from "../actions/index";

const initialState = {
  articleList: [],
  keywordList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return { ...state, articleList: action.payload.data };
    case FETCH_KEYWORD:
      return { ...state, keywordList: action.payload.data };
    default:
      return state;
  }
}
=======

import { FETCH_ARTICLE } from '../actions/index';


const initialState = {
    articleList: [],
};

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_ARTICLE:
            return { ...state, articleList: action.payload.data };
        default:
            return state;
    }
}
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
