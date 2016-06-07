import {
    DONOR_INVALID,
    DONOR_FETCHING,
    DONOR_FETCHED,
    DONOR_FETCH_FAILED,
    DONOR_ADDED
} from '../actions/donor';

const initialState = {
  donors: [],
  readyState: "",
  error: "",
  addedDonor: null
}

export default function donor(state = {}, action) {
    switch (action.type) {
        case DONOR_FETCHING:
            return {
                  ...state,
                  readyState: DONOR_FETCHING
                }
        case DONOR_FETCH_FAILED:
            return {...state,
                    readyState: DONOR_FETCH_FAILED,
                    error: action.error
                }
        case DONOR_ADDED:
            return {...state,
              donors: state.donors.concat(action.result),
              addedDonor: action.result
        }
        case DONOR_FETCHED:
            return {...state,
                    readyState: DONOR_FETCHED,
                    donors: action.result
                }
        default:
            return state;
    }
}
