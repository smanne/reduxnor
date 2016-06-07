import config from '../config';

export const DONOR_INVALID = 'DONOR_INVALID';
export const DONOR_FETCHING = 'DONOR_FETCHING';
export const DONOR_FETCHED = 'DONOR_FETCHED';
export const DONOR_ADDED = 'DONOR_ADDED';
export const DONOR_ADD_FAILED = 'DONOR_ADD_FAILED';
export const DONOR_FETCH_FAILED = 'DONOR_FETCH_FAILED';

export function fetchDonors() {
  return (dispatch) => {
    dispatch({ type: DONOR_FETCHING });

    return fetch(config.api+'/donors/')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => dispatch({ type: DONOR_FETCHED, result: result }),
        (error) => dispatch({ type: DONOR_FETCH_FAILED, error })
      );
  }
}

export function addDonor(donor) {
  return (dispatch) => {
    dispatch({ type: DONOR_FETCHING });

    return fetch(config.api+'/donors/', {
				method: 'post',
				headers: {
					'Accept': 'application/json'
				},
				body: JSON.stringify(donor)
			})
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => dispatch({ type: DONOR_ADDED, result: result }),
        (error) => dispatch({ type: DONOR_ADD_FAILED, error })
      );
  }
}

function shouldFetchDonor(state) {
	const donor = state.donors

	if (!donor ||
		donor.readyState === DONOR_FETCH_FAILED ||
		donor.readyState === DONOR_INVALID) {
		return true;
	}

	return false;
}

export function fetchDonorIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchDonor(getState())) {
			return dispatch(fetchDonors());
		}
	}
}
