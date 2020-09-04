import { CHANGE_PAGE, SET_DATA, SET_USERS } from '../Constants/index'

const initialState = {
    page: "Home",
    data: {},
    users: []
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

    if (action.type === SET_USERS) {
        return Object.assign({}, state, {
            users: action.payload
        })
    }

    return state;
}

export default rootReducer;