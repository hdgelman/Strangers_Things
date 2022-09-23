
import { createRoot } from 'react-dom/client'
import { Header, Posts, Login } from './components'
import { useEffect } from 'react'
import './style.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getPosts } from './api'

const App = () => {

    useEffect(() => {
        const getData = async () => {
            await getPosts()
        }
        getData();
    }, [])

    return (
        <div>
            {/* <Login /> */}
            {/* <Header /> */}
            <Posts />
        </div>
    )
};


const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <App />
);