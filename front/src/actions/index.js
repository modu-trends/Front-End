import axios from "axios";

export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_KEYWORD = "FETCH_KEYWORD";

export function fetchArticle(keyword) {
  const request = axios.get("https://www.everytrend.kr/petition/1/" + keyword);

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

export function fetchArticles(keyword) {
  const request = axios
    .get("https://www.everytrend.kr/petition/1/" + keyword)
    .then(response => {
      return response;
    });

  return request;
}

export function fetchKeyword() {
  const request = axios.get("https://www.everytrend.kr/keyword/");

  return {
    type: FETCH_KEYWORD,
    payload: request
  };
}
