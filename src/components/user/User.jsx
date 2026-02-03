import React from 'react'
import {Link, useParams} from "react-router-dom";
import Loader from "../loader/Loader.jsx";

export default function User({user, onDelete}) {
    return (
        <div className={"col-md-4"} key={user.id}>
            <div className={"card"}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{user.name}</h5>
                    <p className={"card-text"}>{user.email}</p>
                    <img src={user.imageUrl} className={"w-100 mb-3"} alt={user.name}/>
                    <Link to={`/users/${user.id}`} className={"btn btn-outline-dark"}>Details</Link>
                    <button className={"btn btn-outline-danger ms-2"} onClick={()=>onDelete(user.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
