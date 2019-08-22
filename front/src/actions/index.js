import axios from "axios";

export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_KEYWORD = "FETCH_KEYWORD";
export const FETCH_DISAGREEMENT = "FETCH_DISAGREEMENT"
export const FETCH_REPORT = "FETCH_REPORT"
export const FETCH_LOGIN = "FETCH_LOGIN"
export const FETCH_LOGOUT = "FETCH_LOGOUT"

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
  const request = axios.get("/api/keyword/");
  // const request = axios.get("/api/keyword/");
 
  return {
    type: FETCH_KEYWORD,
    payload: request
  };
}


export function fetchDisagreement(articleNumber, token){
  // Action: 동의하지 않습니다. 버튼을 클릭했을 때 
  const request = axios.post("/api/oppose/",{"pk":articleNumber},{ 
    headers: { 
      'Authorization': "JWT "+token
    }
   });

  return {
    type: FETCH_DISAGREEMENT,
    payload: request
  };
}


export function fetchReport(articleNumber, token, type, reason){
  // Action: 신고하기 버튼을 클릭했을 때 
  const request = axios.post("/api/report/",{ "pk":articleNumber, "type":type, "content":reason},{ 
    headers: { 
      'Authorization': "JWT "+token
    }
   });

  return {
    type: FETCH_REPORT,
    payload: request
  };
}

export function fetchLogin(token){

  return {
    type: FETCH_LOGIN,
    payload: token
  }
}

export function fetchLogout(){

  return {
    type:FETCH_LOGOUT,
    payload: false
  }
}