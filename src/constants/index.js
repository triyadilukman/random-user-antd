const RANDOM_USER_API = "https://randomuser.me/api/";
const RANDOM_USER_RESULTS = 5;
const RANDOM_USER_FIELDS = "login,name,email,gender,registered";
const RESET_FILTER = "RESET_FILTER";
const FILTER_BY = "FILTER_BY";
const SET_PAGE = "SET_PAGE";
const DATE_FORMAT = "DD-MM-YYYY HH:mm";
const TABLE_COLUMN = (css) => [
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

export {
	DATE_FORMAT,
	RANDOM_USER_API,
	RANDOM_USER_RESULTS,
	RANDOM_USER_FIELDS,
	RESET_FILTER,
	FILTER_BY,
	SET_PAGE,
	TABLE_COLUMN,
};
