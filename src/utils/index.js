import {
	RANDOM_USER_API,
	RANDOM_USER_RESULTS,
	RANDOM_USER_FIELDS,
} from "constants";

export const filterResult = (array, filters) => {
	return array.filter((f) => {
		const getName = `${f.name.first} ${f.name.last}`.toLocaleLowerCase();

		const nameCondition = getName.includes(
			filters["name"].toLocaleLowerCase()
		);

		const genderCondition = filters["gender"]
			? f.gender === filters["gender"].toLocaleLowerCase()
			: true;

		return nameCondition && genderCondition;
	});
};

export const getUsers = async (page = 1) => {
	const tempApiString = `${RANDOM_USER_API}?page=${page}&results=${RANDOM_USER_RESULTS}&inc=${RANDOM_USER_FIELDS}&seed=foo`;

	const users = await fetch(tempApiString);
	return users.json();
};
