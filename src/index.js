
import { createRoot } from 'react-dom/client'
import { Header, ViewSinglePost, Message, CreatePost, Login, Search, Register, SinglePost, Profile } from './components'
import { useEffect } from 'react'
import './style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {

    return (
        <div>
            <div> <Search /> </div>
            <div> <Login /> </div>
            <div> <Register /> </div>
            <div> <CreatePost /> </div>
        </div>
    )
};

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <App />
);