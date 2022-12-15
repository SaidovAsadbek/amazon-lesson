import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// all imported components
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from "./components/js/PurchaseCart";

// login/register page
import Login from "./components/js/Login";
import { auth } from "./components/js/firebase";
import { useStateValue } from "./components/js/StateProvider";

function App() {
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user, "User");

            if (user) {
                // The user just logged in
                dispatch({
                    type: "SET_USER",
                    user,
                });
            } else {
                // The use just logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        exact
                        path="/purchase/cart"
                        element={
                            <>
                                <Header />
                                <PurchaseCart />
                            </>
                        }
                    />
                    <Route exact path="/register/login" element={<Login />} />
                    <Route
                        path="*"
                        element={
                            <>
                                <h1>404 Not Found</h1>
                                <p>Several International Error!1</p>
                                <a href="/">Go back</a>
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
