import React, { useState } from "react";
import { APP_URL } from '../api'

export const createNewPost = async (token, addPost) => {
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
}

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willShip, setWillShip] = useState(false);
    const [willDeliver, setWillDeliver] = useState(false);

    const sumbitNewPost = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token")
        const post = { title, description, price, location, willDeliver, willShip }

        const displayNewPost = await createNewPost(token, post);
        alert("Your post has been created!");
        return displayNewPost
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

    const addWillShip = (event) => {
        setWillShip(event.target.value)
    }

    const addWillDeliver = (event) => {
        setWillDeliver(event.target.value)
    }

    return (
        <div>
            <h1>Add a Post</h1>
            <form id="newPost" onSubmit={sumbitNewPost}>
                <label>Title: </label>
                <input type="text" id="titleId" name="title" onChange={addTitle} ></input><br></br>

                <label>Description: </label>
                <input type="text" id="descriptionId" name="description" onChange={addDescription}></input><br></br>

                <label>Price: </label>
                <input type="text" id="priceId" name="price" onChange={addPrice}></input><br></br>

                <label>Location: </label>
                <input type="text" id="locationId" name="location" onChange={addLocation}></input><br></br>

                <label>Willing to Ship? </label>

                <select name="willShip" id="shipId" onChange={addWillShip}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label> Willing to Deliver? </label>
                <select name="willDeliver" id="deliverId" onChange={addWillDeliver}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br></br>

                <button type="submit" form="newPostForm" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost 