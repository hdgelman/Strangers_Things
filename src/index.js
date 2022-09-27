
import { createRoot } from 'react-dom/client'
import { Header, Message, Posts, CreatePost, Login, Search, Register, Profile } from './components'
import { useEffect } from 'react'
import './style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {

    return (
        <div>
            <div> <Search /> </div>
            <div> <Login /> </div>
            <div> <Register /> </div>
            <div> <Posts /> </div>
        </div>
    )
};

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <App />
);