import { Layout, Typography } from "antd";

const { Title } = Typography;
const { Content } = Layout;

const View = ({ children }) => (
	<Content style={{ padding: "48px" }}>
		<Title level={2}>Random Users Table</Title>

		{children}
	</Content>
);

export default View;
