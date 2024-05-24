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
			reader.onload = async e => {
				const arrayBuffer = e.target.result;
				const byteArray = new Uint8Array(arrayBuffer);

				// Convert byteArray to base64 for displaying the image
				const base64String = btoa(
					new Uint8Array(arrayBuffer).reduce(
						(data, byte) => data + String.fromCharCode(byte),
						""
					)
				);
				//setSelectedImage(`data:image/jpeg;base64,${base64String}`);

				// Send byte array to the backend
				//await sendImageToBackend(byteArray);
				alert(byteArray);
			};
			reader.readAsArrayBuffer(file);
		}
		alert("successfully uploaded photo");
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
