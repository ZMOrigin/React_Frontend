import { ADD_ARTICLE } from '../Constants/index'

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: action.payload
        });
    }
    return state;
}

export default rootReducer;