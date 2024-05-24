import React from "react";
import { Button } from "./rounded-button.styles";

const RoundedButton = ({ children, style, onClick }) => {
	return (
		<Button style={style} {...{ onClick }}>
			<b>{children}</b>
		</Button>
	);
};

export default RoundedButton;
