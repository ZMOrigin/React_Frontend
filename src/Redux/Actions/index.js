import { ADD_ARTICLE } from "../Constants/index";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}