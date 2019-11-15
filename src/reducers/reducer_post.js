import _ from 'lodash';
import { FETCH_POST } from '../actions/index';

export const PostReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}
