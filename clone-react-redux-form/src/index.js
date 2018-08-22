import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, withRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./store";

const AppWithRouter = withRouter(App);

render(
	<Provider store={store}>
		<BrowserRouter>
			<AppWithRouter />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
