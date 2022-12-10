import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// all imported components
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from './components/js/PurchaseCart';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
					<Route path="/purchase/cart" element={
						<>
							<Header />
							<PurchaseCart />
						</>
					} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
