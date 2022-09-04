
import { createRoot } from 'react-dom/client'
// import { Header } from './components'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { getPosts } from './api'
const URL_POSTS = `https://strangers-things.herokuapp.com/api/2208-FTB-ET-WEB-FT/posts`

const App = () => {
    const [userPosts, setUserPosts] = useState([]);


    useEffect(() => {
        const getData = async () => {
            await getPosts();
        }
        getData();
    }, [])

    return (
        < div >
            <nav>
                <span>Stranger's Things </span>
                <span>Home </span>
                <span>Profile </span>
                <span>Login </span>
            </nav>
        </div >
    )
}



const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />)