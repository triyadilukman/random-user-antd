import { useMemo } from "react";
import { css } from "@emotion/css";
import dayjs from "dayjs";

import { Table } from "antd";

const DataTable = ({ results, loading, onChangePage }) => {
	const onChangePagination = (pagination) => {
		console.log("params", pagination);
		onChangePage(pagination.current)
	};

	const columnsMemo = [
		{
			title: "User Name",
			dataIndex: "userName",
		},
		{
			title: "Name",
			dataIndex: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: "Email",
			dataIndex: "email",
			sorter: (a, b) => a.email.localeCompare(b.email),
		},
		{
			title: "Gender",
			dataIndex: "gender",
			render: (_, item) => (
				<div
					className={css`
						text-transform: capitalize;
					`}
				>
					{item.gender}
				</div>
			),
			sorter: (a, b) => a.gender.localeCompare(b.gender),
		},
		{
			title: "Registered Date",
			dataIndex: "registered",
			sorter: (a, b) => a.registered.localeCompare(b.registered),
		},
	];

	const dataMemo = useMemo(() => {
		return results.map((result, idx) => ({
			key: idx,
			userName: result.login.username,
			name: `${result.name.first} ${result.name.last}`,
			email: result.email,
			gender: result.gender,
			registered: `${dayjs(result.registered.date).format(
				"DD-MM-YYYY HH:mm"
			)}`,
		}));
	}, [results]);

	return (
		<Table
			loading={loading}
			columns={columnsMemo}
			dataSource={dataMemo}
			onChange={onChangePagination}
			pagination={{ defaultCurrent: 1, total: 20  }} 
		/>
	);
};

export default DataTable;
