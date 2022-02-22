import { FILTER_BY, RESET_FILTER, SET_PAGE } from "constants";

export default function randomUserReducer(state, { type, payload }) {
	switch (type) {

		case FILTER_BY: {
      const { newFilters, newResults } = payload;

			return {
				...state,
				filters: newFilters,
        results: newResults
			};
		}

		case RESET_FILTER: {
			return {
				...state,
				filters: {
					name: '',
					gender: '',
				},
        results: payload.initialResults,
			};
		}

		case SET_PAGE: {
			return {
				...state,
				page: payload.page,
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
