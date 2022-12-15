import React, { useState } from "react";
import "../css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { InfinitySpin } from "react-loader-spinner";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [successed, setSuccessed] = useState("");
    const navigate = useNavigate();

    // sign-In
    const signIn = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3999);
        setTimeout(() => {
            auth.signInWithEmailAndPassword(email, password)
                .then((user) => {
                    // console.log(user, "Method sign-in");
                    navigate("/");
                })
                .catch((error) => {
                    alert(error.message);
                });
        }, 4000);
    };

    // register
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // console.log(user, "Method register");
                navigate("/register/login");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login-link">
                <NavLink to="/" className="login-page-router">
                    <img
                        src="../brand/amazon.png"
                        className="login__logo"
                        alt="Logo"
                    />
                </NavLink>
            </div>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={signIn}
                        className="login__signInButton"
                        type="submit">
                        Sign In
                    </button>
                    {loading ? (
                        <div
                            className="loader"
                            style={{ position: "relative" }}>
                            <InfinitySpin
                                className="infinity-spinner"
                                color="crimson"
                                ariaLabel="three-dots-loading"
                                wrapperStyle
                                wrapperClass
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>

                <button onClick={register} className="login__registerButton">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
