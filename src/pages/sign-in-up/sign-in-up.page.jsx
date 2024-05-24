import React from "react";
import "./sign-in-up.page.css";

import logo from "../../resources/logooooooo.png";

const SignInUp = () => {
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
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
						</div>
						<div className="jump-in-rectangle">Jump In</div>
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
