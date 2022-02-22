import { FILTER_BY, RESET_FILTER, SET_PAGE } from "constants";
import { filterResult } from 'utils'

export default function randomUserActions({ dispatch, state, initialResults }) {

	const filterByName = ({ name = "" }) => {
		const newFilters = { ...state.filters, name };
		const filteredUsers = filterResult(initialResults, { ...state.filters, name })
	
		dispatch({
			type: FILTER_BY,
			payload: {
				newFilters,
				newResults: filteredUsers,
			},
		});
	};

  const filterByGender = ({ gender = "" }) => {
		const newFilters = { ...state.filters, gender }
		const filteredUsers = filterResult(initialResults, newFilters)

		dispatch({
			type: FILTER_BY,
			payload: {
				newFilters,
				newResults: filteredUsers,
			},
		});
	};

	const resetFilter = () => {
		dispatch({
			type: RESET_FILTER,
			payload: {
				initialResults,
			}
		})
	}

	const setPage = page => {
		// reset filter first
		dispatch({
			type: RESET_FILTER,
			payload: {
				initialResults,
			}
		})

		dispatch({
			type: SET_PAGE,
			payload: {
				page,
			},
		});
	}

  return {
    filterByName,
    filterByGender,
		resetFilter,
		setPage,
  }
}


