import React, { useEffect, useState } from "react";
import { URL_POSTS } from '../api'

const Posts = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState('')
    try {
        useEffect(() => {
            const apiRequest = async () => {
                const response = await fetch(`${URL_POSTS}`);
                const data = await response.json();
                setUserPosts(data.data.posts)
                console.log(data)
            }

            apiRequest()
        }, [])

    } catch (error) {
        alert('Oops, trouble fetching the page!', error)
    }

    return (
        <>
            <div id='posts-stuff'>
                <h1>Posts</h1>
                <ul>
                    {
                        userPosts.map(post => <li onClick={(setFeaturedPost)} className="post" key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>{post.price}</p>
                            <p>{post.willDeliver}</p>
                        </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Posts;