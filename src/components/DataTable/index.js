import { useMemo } from "react";
import { TABLE_COLUMN, DATE_FORMAT } from "constants";
import { css } from "@emotion/css";
import dayjs from "dayjs";

import { Table } from "antd";

const DataTable = ({ results, loading, onChangePage }) => {
	const onChangePagination = (pagination, _, sorter) => {
		// prevent refetch user pagination while sort
		if (!sorter || !sorter.column)
			onChangePage(pagination.current)
	};

	const dataMemo = useMemo(() => {
		return results.map((result, idx) => ({
			key: idx,
			userName: result.login.username,
			name: `${result.name.first} ${result.name.last}`,
			email: result.email,
			gender: result.gender,
			registered: `${dayjs(result.registered.date).format(DATE_FORMAT)}`,
		}));
	}, [results]);

	return (
		<Table
			loading={loading}
			columns={TABLE_COLUMN(css)}
			dataSource={dataMemo}
			onChange={onChangePagination}
			pagination={{ defaultCurrent: 1, total: 100 }} 
		/>
	);
};

export default DataTable;
