import { styled } from "styled-components";

export const Button = styled.button`
	border-radius: 20px;
	font-size: 30px;
	background-color: #145427;
	padding: 10px;
	border: unset;
	margin: 7.5px;
	color: white;
	font-style: italic;
	position: absolute;
	animation-duration: 5s;
	transition: background-color 0.4s ease; /* Smooth transition for background color */

	&:hover {
		background-color: black;
		/* background-color: #145427; */
		cursor: pointer;
		//padding: unset;
		/* font-weight: unset; */
	}
`;
