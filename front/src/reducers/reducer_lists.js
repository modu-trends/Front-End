
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