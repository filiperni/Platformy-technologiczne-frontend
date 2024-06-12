import React, { useState } from "react";
import "./sign-in-up.page.css";

import logo from "../../resources/logooooooo.png";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function createAccount() {
		console.log("create account clicked");
		const url = `http://localhost:8080/api/v1/app-user/login?login=${encodeURIComponent(
			email
		)}&password=${encodeURIComponent(password)}`;
		console.log(url);
		fetch(url, {
			method: "POST",
			headers: {
				Accept: "*/*",
			},
			body: "",
		})
			.then(res => {
				console.log("success");
				console.log(res);
				if (res.status === 200) {
					navigate(`/home/${email}`);
					console.log("");
				} else {
					alert("Wrong email or password. Try again.");
				}
			})
			.catch(error => {
				console.log("logging error");
				console.log(error);
				console.log("Error:", error.message);

				// Extract the status code from the error message if needed
				const statusCode = error.message.match(/Error: (\d+)/);
				if (statusCode) {
					console.log("Status Code:", statusCode[1]);
				}
			});
		//window.open("/home");
	}

	return (
		<div className="container">
			<div className="rounded-rectangle">
				<div className="split-container">
					<div className="half-rectangle left-rectangle">
						<div className="inner-rounded-rectangle">
							<div className="additional-rounded-rectangle">
								<img src={logo} alt="opis"></img>
							</div>
						</div>
					</div>
					<div className="half-rectangle right-rectangle">
						<div className="top-rectangle">
							Fill below to jump in!
						</div>
						<div className="input-area">
							<input
								type="email"
								placeholder="Email"
								value={email}
								onChange={event => {
									setEmail(event.target.value);
								}}
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={event => {
									setPassword(event.target.value);
								}}
							/>
						</div>
						<div
							className="jump-in-rectangle"
							onClick={createAccount}
						>
							Jump In
						</div>
					</div>
				</div>
				<div className="welcome-text">
					Welcome to <br />
					&emsp;&emsp; &emsp;Pix Pulse
				</div>
				<div className="come-text">
					Best place to keep your <br />
					{"\t"} {"\t"} MEMORIES
				</div>
			</div>
		</div>
	);
};

export default SignInUp;
