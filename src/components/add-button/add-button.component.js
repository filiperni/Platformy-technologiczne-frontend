import React from "react";
import RoundedButton from "../rounded-button/rounded-button.component";

const AddButton = ({ addImage, email }) => {
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
				// const base64String = btoa(
				// 	new Uint8Array(arrayBuffer).reduce(
				// 		(data, byte) => data + String.fromCharCode(byte),
				// 		""
				// 	)
				// );
				console.log("kurrrrrwa");
				const base64String = byteArrayToBase64(byteArray);

				// ["10.10.2024](`data:image/jpeg;base64,${base64String}`);
				console.log(`data:image/jpeg;base64,${base64String}`);
				addImage({
					date: "12.06.2024",
					src: `data:image/jpeg;base64,${base64String}`,
				});
				// console.log(`data:image/jpeg;base64,${base64String}`);

				//setSelectedImage(`data:image/jpeg;base64,${base64String}`);

				// Send byte array to the backend
				//await sendImageToBackend(byteArray);
				// console.log(Array.from(byteArray));
				// alert(byteArray);
				// console.log(JSON.stringify(Array.from(byteArray)));
				const url = `http://localhost:8080/api/v1/photo/?username=${encodeURIComponent(
					email
				)}&photoCategory=ARCHITECTURE`;
				fetch(url, {
					method: "POST",
					headers: {
						Accept: "*/*",
						"Content-Type": "application/json",
					},
					body: `data:image/jpeg;base64,${base64String}`,
				})
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.error(err);
					});
			};
			reader.readAsArrayBuffer(file);
		}
		alert("successfully uploaded photo");
	};

	const byteArrayToBase64 = byteArray => {
		let binary = "";
		const bytes = new Uint8Array(byteArray);
		const len = bytes.byteLength;
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return window.btoa(binary);
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
