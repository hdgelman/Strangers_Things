import React, { useState } from "react";
import { APP_URL } from '../api'

const Register = (props) => {
    const [error, setError] = useState();
    const isLoggedIn = props.isLoggedIn;
    // const setToken = props.setToken;

    const onSubmit = (event) => {
        const formData = new FormData(event.target);
        event.preventDefault();
        const userName = formData.get("username");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        fetch(`${APP_URL}/users/${isLoggedIn ? "login" : "register"}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: userName,
                    password,
                    // confirmPassword: confirmPassword
                },
            }),
        }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const token = data.data.token;
                    window.localStorage.setItem("token", token);
                    // setToken(token);
                    window.location = "/";
                } else {
                    setError(data.error.message);
                }
            })
            .catch(console.error);
    };
    return (
        <div id='register-stuff'>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div className="formGroup">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        min={3}
                        placeholder="Username"
                    ></input>
                </div>
                <div className="formGroup">
                    <label>password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        min={6}
                        placeholder="Password"
                    ></input>
                </div>
                <div className="formGroup">
                    {!isLoggedIn && <label>Confirm Password</label>}
                    {!isLoggedIn && (
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="Confirm Password"
                        ></input>
                    )}
                </div>
                <div className="form-button">
                    <button>Submit</button>
                </div>
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Register;