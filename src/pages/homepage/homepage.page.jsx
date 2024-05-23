import React from "react";
import { Background, Header } from "./homepage.page.styles";
import RoundedButton from "../../components/rounded-button/rounded-button.component";
import Label from "../../components/label/label.component";

const Homepage = () => {
	const images = {
		"20.04.2024": [
			{ imageUrl: "https://fwcdn.pl/fph/15/08/31508/172288.1.jpg" },
			{
				imageUrl:
					"https://ocdn.eu/pulscms-transforms/1/fX2k9kpTURBXy84NmJiYzJmZjMxN2ZjNzQwMDJmNzNmOTYxZjBhNjZkMi5qcGeTlQMMAM0CQM0BRJUCzQSwAMPDkwmmNmZjMDdmBt4AAaEwAQ/potwory-i-spolka-kadr-z-animacji-petera-doctera.jpeg",
			},
			{
				imageUrl: "https://ocdn.eu/ptv-imported-images/akpa4734999.jpg",
			},
		],
		"18.04.2024": [
			{
				imageUrl:
					"https://homypost.pl/cdn/shop/files/monsters_900x.jpg?v=1706998314",
			},
		],
		"04.04.2024": [
			{
				imageUrl:
					"https://d23.com/app/uploads/2013/04/Mike-Wazowski-1180x600.jpg",
			},
			{
				imageUrl:
					"https://media.printables.com/media/prints/181135/images/1692599_bb7e6779-9e50-4481-b561-eb63047263ea/thumbs/inside/1280x960/png/mike-wazowski_0.webp",
			},
			{
				imageUrl:
					"https://www.motionpicturemagazine.com/wp-content/uploads/2023/08/mike-wazowski.png",
			},
		],
	};
	return (
		<Background>
			<Header>
				<RoundedButton style={{ left: "5px" }}>select</RoundedButton>
				<RoundedButton style={{ left: "126px" }}>delete</RoundedButton>

				<RoundedButton
					style={{
						right: "calc(50vw - 27px)",
						padding: "0px 0px 0px 0px",
						width: "55px",
						height: "55px",
						borderRadius: "50%",
						fontSize: "50px",
					}}
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

				<RoundedButton
					style={{
						right: "5px",
					}}
				>
					+invite user
				</RoundedButton>
			</Header>
			<div
				style={{
					position: "relative",
					paddingTop: "20px",
					overflow: "scroll",
					maxHeight: "calc(100vh - 90px",
				}}
			>
				{Object.keys(images).map(date => {
					console.log(date);
					return (
						<div key={date}>
							<Label
								style={{
									// position: "absolute",
									// left: "10px",
									// top: "10px",
									textAlign: "start",
									margin: "10px",
								}}
							>
								{date}
							</Label>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
								}}
							>
								{images[date].map(image => {
									return (
										<div
											style={{
												width: "300px",
												height: "300px",
												overflow: "hidden",
												margin: "10px",
												marginRight: "unset",
											}}
											key={image.imageUrl}
										>
											<img
												src={image.imageUrl}
												alt="no alt"
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
												}}
											></img>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</Background>
	);
};

export default Homepage;
