import store from "./Store/index"
import { changePage, setData, setStudents, setTeachers } from "./Actions/index"

window.store = store
window.changePage = changePage
window.setData = setData
window.setStudents = setStudents
window.setTeachers = setTeachers
// window.getStudents = getStudents
// window.getTeachers = getTeachers