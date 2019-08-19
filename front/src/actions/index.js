import axios from "axios";

export const FETCH_ARTICLE = "FETCH_ARTICLE";
<<<<<<< HEAD
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
=======

export function fetchArticle() {
  const request = axios.get("/api/articles/");
  
  return {
    type: FETCH_ARTICLE,
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
    payload: request
  };
}