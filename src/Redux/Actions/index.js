import { CHANGE_PAGE, SET_DATA, SET_USERS } from "../Constants/index"

export function changePage(payload) {
  return { type: CHANGE_PAGE, payload }
}

export function setData(payload) {
  return {type: SET_DATA, payload }
}

export function setUsers(payload) {
  return {type: SET_USERS, payload }
}