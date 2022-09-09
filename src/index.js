
import { createRoot } from 'react-dom/client'
import { Header, Posts, Login, Register } from './components'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import './style.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getPosts } from './api'
const URL_POSTS = `https://strangers-things.herokuapp.com/api/2208-FTB-ET-WEB-FT/posts`

const App = () => {
    // const [userPosts, setUserPosts] = useState([]);
    // const [featuredPost, setFeaturedPost] = useState('')

    useEffect(() => {
        const getData = async () => {
            await getPosts()
        }
        getData();
    }, [])

    return <Posts />
};


const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    // <BrowserRouter>
    <App />
    //  </BrowserRouter> */}
);