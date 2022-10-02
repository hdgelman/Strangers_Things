import React, { useState } from "react";
import { APP_URL } from '../api'

export const createNewPost = async (token, addPost) => {
    try {
        const response = await fetch(`${APP_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                post: addPost,
            }),
        });
        const result = await response.json();
        const newPost = result.data.post;
        return newPost;

    } catch (error) {
        alert('Oops, trouble creating post!')
    }
}

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const submitNewPost = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token')
        const post = {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
        }

        const newPost = await createNewPost(token, post);
        return newPost
    };

    const addTitle = (event) => {
        setTitle(event.target.value)
    }

    const addDescription = (event) => {
        setdescription(event.target.value)
    }

    const addPrice = (event) => {
        setPrice(event.target.value)
    }

    const addLocation = (event) => {
        setLocation(event.target.value)
    }

    const addWillDeliver = (event) => {
        setWillDeliver(event.target.value)
    }

    return (
        <div id='createpost-stuff'>
            <h1>Add a Post</h1>
            <form id="newPost" onSubmit={submitNewPost}>
                <label>Title: </label>
                <input type="text" id="titleId" name="title" onChange={addTitle} ></input><br></br>

                <label>Description: </label>
                <input type="text" id="descriptionId" name="description" onChange={addDescription}></input><br></br>

                <label>Price: </label>
                <input type="text" id="priceId" name="price" onChange={addPrice}></input><br></br>

                <label>Location: </label>
                <input type="text" id="locationId" name="location" onChange={addLocation}></input><br></br>

                <label> Willing to Deliver? </label>
                <select name="willDeliver" id="deliverId" onChange={addWillDeliver}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br></br>

                <button type="submit" form="newPost" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost 