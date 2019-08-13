import axios from "axios";

export const FETCH_ARTICLE = "FETCH_ARTICLE";

export function fetchArticle() {
  const request = axios.get("/api/articles/");
  
  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}