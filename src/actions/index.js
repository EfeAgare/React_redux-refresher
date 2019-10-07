// This is an action creator

import { ADD_ARTICLE } from "../constants/action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}
export const getData = () => async (dispatch)=> fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    dispatch({ type: "DATA_LOADED", payload: json });
  })