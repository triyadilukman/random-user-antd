import { Col, Row } from "antd";
import { Select, Input, Button } from "antd";
import { formSty, rowSty } from "./styles";

const { Option } = Select;
const { Search } = Input;

const Filter = ({ onChangeName, onChangeGender, onReset, genderValue, nameValue }) => {
	const onSearch = (e) => {
    const name = e.target.value;
    onChangeName({ name });
	};

	const onSelect = gender => {
		onChangeGender({ gender })
	}

	return (
		<Row className={rowSty} gutter={16}>
			<Col span={8}>
				<Search
					className={formSty}
					placeholder="Search"
					onChange={onSearch}
					value={nameValue}
					enterButton
				/>
			</Col>
			<Col span={8}>
				<Select value={genderValue} className={formSty} onChange={onSelect}>
					<Option value="">All Gender</Option>
					<Option value="male">Male</Option>
					<Option value="female">Female</Option>
				</Select>
			</Col>
			<Col>
				<Button type="primary" onClick={onReset}>Reset Filter</Button>
			</Col>
		</Row>
	);
};

export default Filter;
