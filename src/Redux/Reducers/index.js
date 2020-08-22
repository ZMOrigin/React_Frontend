import { CHANGE_PAGE, SET_DATA } from '../Constants/index'

const initialState = {
    page: "Home",
    data: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === CHANGE_PAGE) {
        return {page: action.payload}
    }

    if (action.type === SET_DATA) {
        return {data: action.payload}
    }
    return state;
}

export default rootReducer;