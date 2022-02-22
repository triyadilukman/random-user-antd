import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { RandomUserProvider } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<RandomUserProvider>
			<App />
		</RandomUserProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
