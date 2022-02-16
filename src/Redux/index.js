import store from "./Store/index"
import { changePage, setData, setStudents, setTeachers, setLogin } from "./Actions/index"

window.store = store
window.changePage = changePage
window.setData = setData
window.setStudents = setStudents
window.setTeachers = setTeachers
window.setLogin = setLogin
// window.getStudents = getStudents
// window.getTeachers = getTeachers