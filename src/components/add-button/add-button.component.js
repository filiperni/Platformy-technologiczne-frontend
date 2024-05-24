import React from "react";
import RoundedButton from "../rounded-button/rounded-button.component";

const AddButton = () => {
	function onClick() {
		console.log("click");
		document.getElementById("fileInput").click();
	}

	const handleFileChange = event => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = e => {
				// setSelectedImage(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<RoundedButton
				style={{
					right: "calc(50vw - 27px)",
					padding: "0px 0px 0px 0px",
					width: "55px",
					height: "55px",
					borderRadius: "50%",
					fontSize: "50px",
				}}
				onClick={onClick}
			>
				<div
					style={{
						position: "absolute",
						top: "-7px",
						left: "10px",
					}}
				>
					+
				</div>
			</RoundedButton>
			<input
				type="file"
				id="fileInput"
				accept="image/*"
				style={{ display: "none" }}
				onChange={handleFileChange}
			></input>
		</>
	);
};

export default AddButton;
