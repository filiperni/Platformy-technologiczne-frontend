import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.page";
import SignInUp from "./pages/sign-in-up/sign-in-up.page";

const router = createBrowserRouter([
	{
		path: "/home/:email",
		element: <Homepage />,
	},
	{
		path: "/",
		element: <SignInUp />,
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
