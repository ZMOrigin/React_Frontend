import jwt from 'jsonwebtoken'
import { CHANGE_PAGE, SET_DATA, SET_STUDENTS, SET_TEACHERS, SET_LOGIN } from '../Constants/index'

const initialState = {
    page: "Home",
    data: {},
    students: [],
    teachers: [],
    loggedIn: false
};

let rootReducer = (state = initialState, action) => {
    if (action.type === CHANGE_PAGE) {
        return Object.assign({}, state, {
            page: action.payload
        })
    }

    if (action.type === SET_DATA) {
        return Object.assign({}, state, {
            data: action.payload
        })
    }

    // if (action.type === GET_STUDENTS) {
    //     return state.students
    // }

    // if (action.type === GET_TEACHERS) {
    //     return state.students
    // }

    if (action.type === SET_STUDENTS) {
        return Object.assign({}, state, {
            students: action.payload
        })
    }

    if (action.type === SET_TEACHERS) {
        return Object.assign({}, state, {
            teachers: action.payload
        })
    }

    if (action.type === SET_LOGIN) {
        const token = localStorage.getItem('jwt')
        let valid = false
        if (token) {
            const decodedToken = jwt.decode(token, 'GqD/oODa54IghC+7zwPG7LLurc0=') | { exp: new Date().getTime() - 10 }
            const dateNow = new Date()
            valid = decodedToken.exp < dateNow.getTime() ? false : true
        }

        return Object.assign({}, state, { loggedIn: valid })
    }

    return state;
}

export default rootReducer;