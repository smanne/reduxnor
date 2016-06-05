export const WORKSHEET_INVALID = 'WORKSHEET_INVALID';
export const WORKSHEET_FETCHING = 'WORKSHEET_FETCHING';
export const WORKSHEET_FETCHED = 'WORKSHEET_FETCHED';
export const WORKSHEET_FETCH_FAILED = 'WORKSHEET_FETCH_FAILED';

function fetchWorksheet(worksheetId) {
  return (dispatch) => {
    dispatch({ type: WORKSHEET_FETCHING, worksheetId: worksheetId });

    return fetch('https://tapi.tabtor.com/worksheet/'+worksheetId+'?format=json')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => dispatch({ type: WORKSHEET_FETCHED, worksheetId: worksheetId, result: result.result }),
        (error) => dispatch({ type: WORKSHEET_FETCH_FAILED, worksheetId: worksheetId, error })
      );
  }
}

function shouldFetchWorksheet(state, worksheetId) {
	const worksheet = state.worksheets[worksheetId];

	if (!worksheet ||
		worksheet.readyState === WORKSHEET_FETCH_FAILED ||
		worksheet.readyState === WORKSHEET_INVALID) {
		return true;
	}

	return false;
}

export function fetchWorksheetIfNeeded(worksheetId) {
	return (dispatch, getState) => {
		if (shouldFetchWorksheet(getState(), worksheetId)) {
			return dispatch(fetchWorksheet(worksheetId));
		}
	}
}
