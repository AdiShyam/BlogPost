import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions/index';

export const PostReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");

        // case CREATE_POST: 
        //     return {...action.payload.status}
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data }
        default:
            return state;
    }
}
