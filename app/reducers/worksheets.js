import {
  WORKSHEET_INVALID,
  WORKSHEET_FETCHING,
  WORKSHEET_FETCHED,
  WORKSHEET_FETCH_FAILED
} from '../actions/worksheet';

export default function worksheets(state = {}, action) {
  switch (action.type) {
    case WORKSHEET_FETCHING:
      return Object.assign({}, state, {
        [action.worksheetId]: {
          readyState: WORKSHEET_FETCHING
        }
      });
    case WORKSHEET_FETCH_FAILED:
      return Object.assign({}, state, {
        [action.worksheetId]: {
          readyState: WORKSHEET_FETCH_FAILED,
          error: action.error
        }
      });
    case WORKSHEET_FETCHED:
      return Object.assign({}, state, {
        [action.worksheetId]: {
          readyState: WORKSHEET_FETCHED,
          json: action.result
        }
      });
    default:
      return state;
  }
}
