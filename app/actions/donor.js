export const DONOR_INVALID = 'DONOR_INVALID';
export const DONOR_FETCHING = 'DONOR_FETCHING';
export const DONOR_FETCHED = 'DONOR_FETCHED';
export const DONOR_FETCH_FAILED = 'DONOR_FETCH_FAILED';

function fetchDonors() {
  return (dispatch) => {
    dispatch({ type: DONOR_FETCHING, donorId: donorId });

    return fetch('https://tapi.tabtor.com/donor/'+donorId+'?format=json')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => dispatch({ type: DONOR_FETCHED, donorId: donorId, result: result.result }),
        (error) => dispatch({ type: DONOR_FETCH_FAILED, donorId: donorId, error })
      );
  }
}

function shouldFetchWorksheet(state, donorId) {
	const donor = state.donors[donorId];

	if (!donor ||
		donor.readyState === DONOR_FETCH_FAILED ||
		donor.readyState === DONOR_INVALID) {
		return true;
	}

	return false;
}

export function fetchWorksheetIfNeeded(donorId) {
	return (dispatch, getState) => {
		if (shouldFetchWorksheet(getState(), donorId)) {
			return dispatch(fetchWorksheet(donorId));
		}
	}
}
