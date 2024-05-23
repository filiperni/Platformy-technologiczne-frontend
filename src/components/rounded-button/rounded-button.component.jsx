import React from "react";
import { Button } from "./rounded-button.styles";

const RoundedButton = ({ children, style }) => {
	return (
		<Button style={style}>
			<b>{children}</b>
		</Button>
	);
};

export default RoundedButton;
