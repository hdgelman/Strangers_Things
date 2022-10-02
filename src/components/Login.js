import React, { useState } from "react";
import { userLogin } from '../api'

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