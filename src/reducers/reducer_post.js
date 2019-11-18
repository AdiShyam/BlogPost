import _ from 'lodash';
import { FETCH_POSTS, DELETE_POST, FETCH_POST } from '../actions/index';

export const PostReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");

        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data }
        
        case DELETE_POST:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}
