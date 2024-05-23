import { React } from "react";
import { TextContainer } from "./label.component.styles";

export const Label = ({ children, style }) => {
	return <TextContainer style={style}>{children}</TextContainer>;
};

export default Label;
