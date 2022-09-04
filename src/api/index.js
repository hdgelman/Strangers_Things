const BASE_URL = "https://strangers-things.herokuapp.com"
const COHORT_NAME = "2208-FTB-ET-WEB-FT"
const URL = `${BASE_URL}/api/${COHORT_NAME}`

//ENDPOINTS
const URL_POSTS = `${URL}/posts`

const getPosts = async () => {
    const response = await fetch(`${URL_POSTS}`);
    const data = response.json();
    const userPostsList = data.results;
    setUserPosts(userPostsList)
}


