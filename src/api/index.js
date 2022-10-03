export const BASE_URL = "https://strangers-things.herokuapp.com"
export const COHORT_NAME = "2208-FTB-ET-WEB-FT"
export const APP_URL = `${BASE_URL}/api/${COHORT_NAME}`

//ENDPOINTS
export const URL_POSTS = `${APP_URL}/posts`
export const URL_USERS = `${APP_URL}/users`
export const URL_REGISTER = `${URL_USERS}/register`
export const URL_LOGIN = `${URL_USERS}/login`

export const getPosts = async () => {
    fetch(`${URL_POSTS}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(console.error)
}












