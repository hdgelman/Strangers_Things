export const BASE_URL = "https://strangers-things.herokuapp.com"
export const COHORT_NAME = "2208-FTB-ET-WEB-FT"
export const APP_URL = `${BASE_URL}/api/${COHORT_NAME}`

//ENDPOINTS
export const URL_POSTS = `${APP_URL}/posts`
export const URL_USERS = `${APP_URL}/users`
export const URL_REGISTER = `${URL_USERS}/register`
export const URL_LOGIN = `${URL_USERS}/login`

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

export const getPosts = async () => {
    fetch(`${URL_POSTS}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(console.error)
}












