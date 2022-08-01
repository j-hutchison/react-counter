import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);

	const handleIncrement = () => {
		setCounter(counter + 1);
	};
	const handleDecrement = () => {
		setCounter(counter - 1);
	};

	return (
		<div className="App">
			<h1 className="app-title">Incrementor App</h1>
			<div className="btn-panel">
				<button className="btn" onClick={handleIncrement}>
					+
				</button>
				<button className="btn" onClick={handleDecrement}>
					-
				</button>
			</div>
			<span className="app-ticker">{counter}</span>
		</div>
	);
}

export default App;
