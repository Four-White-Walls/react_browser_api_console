import {
    NEW_GET_REQUEST,
    NEW_POST_REQUEST
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case NEW_GET_REQUEST:
            return {
                ...state, 
                response: action.payload,
            }
        case NEW_POST_REQUEST:
            return {
                ...state, 
                response: action.payload,
            }
        default: 
            return state;
    }
}