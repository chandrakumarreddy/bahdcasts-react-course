import React from "react";

const Alert = () => {
	return (
		<div className="alert alert-success" role="alert">
			chandra kumar reddy
		</div>
	);
};

// it is a function

//takes a component

//returns a enhanced component

const withAnimation = Component => {
	const AnimatedComponent = () => {
		return (
			<div className="wow bounceInUp">
				<Component />
			</div>
		);
	};
	return AnimatedComponent;
};

const AnimatedAlert = withAnimation(Alert);

export default AnimatedAlert;
