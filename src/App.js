import { useRandomUserContext, useRandomUserDispatch } from "context";
import FilterComponent from "components/Filter";
import DataTable from "components/DataTable";
import View from "./View";

import "./App.css";

const App = () => {
	const { results, fetching, filters } = useRandomUserContext();
	const { filterByName, filterByGender, resetFilter, setPage } =
		useRandomUserDispatch();

	return (
		<View>
			<FilterComponent
				onChangeName={filterByName}
				onChangeGender={filterByGender}
				onReset={resetFilter}
				nameValue={filters.name}
				genderValue={filters.gender}
			/>
			<DataTable
				results={results}
				loading={fetching}
				onChangePage={setPage}
			/>
		</View>
	);
};

export default App;
