import { FETCH_ARTICLE, FETCH_KEYWORD, FETCH_DISAGREEMENT, FETCH_REPORT, FETCH_LOGIN, FETCH_LOGOUT } from "../actions/index";

const initialState = {
  articleList: [],
  keywordList: {"article":[],"keyword":[]},
  disagreement: {},
  report: {},
  token: false
};

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_ARTICLE:
      return { ...state, articleList: action.payload.data };

    case FETCH_KEYWORD:
      return { ...state, keywordList: action.payload.data };

    case FETCH_DISAGREEMENT:
      return { ...state, disagreement: action.payload };

    case FETCH_REPORT:
      return { ...state, report: action.payload.data};

    case FETCH_LOGIN:
      return { ...state, token: action.payload }

    case FETCH_LOGOUT:
      return { ...state, token: action.payload }

    default:
      return state;
  }
}
