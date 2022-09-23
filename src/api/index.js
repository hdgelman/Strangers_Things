const BASE_URL = "https://strangers-things.herokuapp.com"
const COHORT_NAME = "2208-FTB-ET-WEB-FT"
const URL = `${BASE_URL}/api/${COHORT_NAME}`
const { REACT_APP_BASE_URL } = process.env;

//ENDPOINTS
const URL_POSTS = `${URL}/posts`
const URL_REGISTER = `${URL}/users/register`

export const getPosts = async () => {
    fetch(`${URL_POSTS}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(console.error)
}

export const callApi = async ({ url, method, token, body }) => {
    try {
        const options = {
            method: method ? method.toUpperCase() : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        };
        if (token) options.headers['Authorization'] = `Bearer ${token}`;
        const response = await fetch(`${REACT_APP_BASE_URL}${url}`, options);
        const data = await response.json();
        if (data.error) {
            (data.error);
        }
        return data;
    } catch (error) {
        console.error(error)
    }
}

// const setToken = (body, token) => {
//     return token ?
//         Object.assign(body, { 'Authorization': `Bearer ${token}` }) :
//         body;
// }





