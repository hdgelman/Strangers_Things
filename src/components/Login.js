import React, { useState } from "react";
import { APP_URL } from '../api'

export const userLogin = async (username, userpass) => {
    const response = await fetch(`${APP_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: userpass
            }
        })
    });
    const result = await response.json();
    const token = result.data.token;

    localStorage.setItem("token", token);
    localStorage.setItem("username", username)
    return token;
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);

    const submitLogin = async (event) => {
        event.preventDefault();
        try {
            const token = await userLogin(username, userPassword);
            if (token) {
                setUsername("");
                setUserPassword("");
                setIsLoggedin(true);
                alert('You are logged in!')
            }
        }
        catch (error) {
            setUsername("");
            setUserPassword("");
            alert('Oops, login failed! Make sure you are using the correct username and password.', error)
        }
    }
    return (
        <div id='login-stuff'>
            <h1>Login</h1>
            <form id="login" onSubmit={submitLogin}>
                <input required type="text" placeholder="Username " value={username} onChange={(event) => {
                    setUsername(event.target.value)
                }} />
                <input required type="password" placeholder="Password " value={userPassword} onChange={(event) => {
                    setUserPassword(event.target.value)
                }} />
                <button type="submit">Enter </button>
            </form>
        </div>
    )
}

export default Login;