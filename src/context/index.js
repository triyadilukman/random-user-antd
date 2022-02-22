import React, { useReducer, createContext, useMemo } from "react";
import useRandomUsers from "hooks";
import randomUserReducer from "./reducer";
import randomUserActions from "./actions";

const RandomUserContext = createContext();
const RandomUserDispatch = createContext();

function RandomUserProvider({ children }) {
	const [state, dispatch] = useReducer(randomUserReducer, {
		page: 1,
		fetching: false,
		initialResults: [],
		results: [],
		filters: {
			name: "",
			gender: "",
		},
	});

	const { loading, results, info } = useRandomUsers(state.page);

	const tempState = useMemo(
		() => ({
			page: state.page,
			fetching: loading,
			initialResults: results,
			results: state.filters.name || state.filters.gender ? state.results : results,
			info,
			filters: {
				name: state.filters.name,
				gender: state.filters.gender,
			},
		}),
		[
			state.results,
			state.filters,
			state.page,
			loading,
			results,
			info,
		]
	);

	return (
		<RandomUserContext.Provider value={{ ...tempState }}>
			<RandomUserDispatch.Provider value={randomUserActions({ dispatch, state, initialResults: results })}>
				{children}
			</RandomUserDispatch.Provider>
		</RandomUserContext.Provider>
	);
}

function useRandomUserContext() {
	const context = React.useContext(RandomUserContext);
	if (context === undefined) {
		throw new Error("useRandomUserContext must be used within a Provider");
	}
	return context;
}

function useRandomUserDispatch() {
	const context = React.useContext(RandomUserDispatch);
	if (context === undefined) {
		throw new Error("useRandomUserDispatch must be used within a Provider");
	}
	return context;
}

export { RandomUserProvider, useRandomUserContext, useRandomUserDispatch };
