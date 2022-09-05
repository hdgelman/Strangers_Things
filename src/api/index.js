const BASE_URL = "https://strangers-things.herokuapp.com"
const COHORT_NAME = "2208-FTB-ET-WEB-FT"
const URL = `${BASE_URL}/api/${COHORT_NAME}`

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

const setToken = (body, token) => {
    return token ?
        Object.assign(body, { 'Authorization': `Bearer ${token}` }) :
        body;
}


export const fetchPosts = async () => {
    const data = await apiCall('/posts')
    if (!data || !data.data) {
        return []
    }
    return data.data.posts || [];
}





