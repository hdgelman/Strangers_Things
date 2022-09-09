import React, { useState } from "react";

const Login = (props) => {
    const [error, setError] = useState();
    const isLogIn = props.isLogIn;
    const setToken = props.setToken;
    const onSubmit = (event) => {
        const fData = new FormData(event.target);
        event.preventDefault();
        const userName = fData.get("username");
        const password = fData.get("password");
        console.log(fData)
        const confirmPassword = fData.get("confirmPassword");
        fetch(`https://strangers-things.herokuapp.com/api/2208-FTB-ET-WEB-FT/users/${isLogIn ? "login" : "register"}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: userName,
                    password,
                },
            }),
        }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const token = data.data.token;
                    window.localStorage.setItem("token", token);
                    setToken(token);
                    window.location = "/";
                } else {
                    setError(data.error.message);
                }
            })
            .catch(console.error);
    };
    return (
        <div>
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
                        placeholder=" Password"
                    ></input>
                </div>
                <div className="formGroup">
                    {!isLogIn && <label>Confirm Password</label>}
                    {!isLogIn && (
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

export default Login;