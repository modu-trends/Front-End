import axios from "axios";

export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_KEYWORD = "FETCH_KEYWORD";

export function fetchArticle() {
  const request = axios.get(
    "https://www.everytrend.kr/petition/1/%EA%B3%B5%EB%AC%B4%EC%9B%90"
  );

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

export function fetchKeyword() {
  const request = axios.get("https://www.everytrend.kr/keyword/");

  return {
    type: FETCH_KEYWORD,
    payload: request
  };
}
