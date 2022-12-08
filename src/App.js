import React from "react";
import "./App.css";

// all imported components
import Header from "./components/js/Header";
import Home from "./components/js/Home";

function App() {
	return (
		<div className="App">
			<h1>Hello React!</h1>
			<Header />
			<Home />
		</div>
	);
}

export default App;
