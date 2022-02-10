// import { CHANGE_PAGE, SET_DATA, SET_USERS } from '../Constants/index'

import { CHANGE_PAGE, SET_DATA, SET_STUDENTS, SET_TEACHERS } from '../Constants/index'

const initialState = {
    page: "Home",
    data: {},
    students: [],
    teachers: []
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

    return state;
}

export default rootReducer;