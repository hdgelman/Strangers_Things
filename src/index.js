
import { createRoot } from 'react-dom/client'
import { Header, Message, Posts, CreatePost, Login, Search, Register, Profile } from './components'
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import './style.css'


const App = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <Routes>
                <Route path='/Posts' element={<Posts />} />
                <Route path='/CreatePost' element={<CreatePost />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
            </Routes>
        </div>
    )
};

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <Router>
        <App />
    </Router>
);