import {
    DONOR_INVALID,
    DONOR_FETCHING,
    DONOR_FETCHED,
    DONOR_FETCH_FAILED
} from '../actions/donor';

const initialState = {
}

export default function donor(state = {}, action) {
    switch (action.type) {
        case DONOR_FETCHING:
            return Object.assign({}, state, {
                [action.donorId]: {
                    readyState: DONOR_FETCHING
                }
            });
        case DONOR_FETCH_FAILED:
            return Object.assign({}, state, {
                [action.donorId]: {
                    readyState: DONOR_FETCH_FAILED,
                    error: action.error
                }
            });
        case DONOR_FETCHED:
            return Object.assign({}, state, {
                [action.donorId]: {
                    readyState: DONOR_FETCHED,
                    json: action.result
                }
            });
        default:
            return state;
    }
}
