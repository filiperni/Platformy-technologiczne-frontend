import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.page";
import SignInUp from "./pages/sign-in-up/sign-in-up.page";

function App() {
	return (
		<div className="App">
			{/* <Router> */}
			{/* <Switch> */}
			{/* <Route path="/"> */}
			{/* <Homepage /> */}
			<SignInUp />
			{/* </Route>
				<Route path="/sign-in-up">
					<div>sign in up</div>
				</Route> */}
			{/* </Switch> */}
			{/* </Router> */}
		</div>
	);
}

export default App;
