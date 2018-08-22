import React, { Fragment, Component } from "react";
import NavBar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Channels from "./components/Channels";

class App extends Component {
	render() {
		const isNotAuthPath =
			this.props.history.location.pathname !== "/register" &&
			this.props.history.location.pathname !== "/login";
		return (
			<Fragment>
				<NavBar />
				<div className="my-4">
					<div className="container">
						<div className="row justify-content-center">
							{isNotAuthPath && (
								<div className="col-md-4">
									<button className="btn btn-info my-3 form-control">
										Start thread
									</button>
									<Channels />
								</div>
							)}
							<div className="col-md-8">
								<AppRouter />
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
