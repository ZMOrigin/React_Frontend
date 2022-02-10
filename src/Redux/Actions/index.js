// import { CHANGE_PAGE, SET_DATA, SET_USERS } from "../Constants/index"

import { CHANGE_PAGE, SET_DATA, SET_TEACHERS, SET_STUDENTS } from "../Constants/index"

export function changePage(payload) {
  return { type: CHANGE_PAGE, payload }
}

export function setData(payload) {
  return {type: SET_DATA, payload }
}

// export function setUsers(payload) {
//   return {type: SET_USERS, payload }
// }

export function setTeachers(payload) {
  return {type: SET_TEACHERS, payload }
}

export function setStudents(payload) {
  return {type: SET_STUDENTS, payload }
}

// export function getTeachers(payload) {
//   return {type: GET_TEACHERS, payload }
// }

// export function getStudents(payload) {
//   return {type: GET_STUDENTS, payload }
// }