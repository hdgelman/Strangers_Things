// import React, { useEffect, useState } from 'react';

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [apiToken, setApiToken] = ('');

//     useEffect(() => {
//         registerUser()
//             .then(getToken)
//     })
//         .catch(error => {
//             throw (error)
//         }, []);

//     const registerUser = async (username, password) => {
//         try {
//             const login = {
//                 username: username,
//                 password: password
//             };
//             const response = await fetch(`${URL}/users/register`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     user: login
//                 })
//             });
//             const result = response.json()
//             console.log(result);
//             const getToken = result.data.token;
//             setApiToken(getToken);
//         } catch (error) { throw error }
//     }
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (password !== confirmPassword) {
//             alert('Password did not match.');
//             return;
//         }
//         await registerUser(username, password);
//         localStorage.setItem('username', username);
//         localStorage.setItem('password', password);
//         localStorage.setItem('APIKey', apiToken);
//     }
// }

// export default Register;