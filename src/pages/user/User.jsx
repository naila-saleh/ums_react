import React from 'react'
import {useParams} from "react-router-dom";
import Loader from "../../components/loader/Loader.jsx";
import useAxios from "../../hooks/useAxios.jsx";

export default function User() {
    const {id} = useParams();
    const {data, loading, error} = useAxios(`${import.meta.env.VITE_BURL}/users/${id}`);
    if (loading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;
    console.log(data.data);
    return (
        <>
            <h1>User Details</h1>
            <h2>Name: {data.data.name}</h2>
            <p>Age: {data.data.age}</p>
            <p>Email: {data.data.email}</p>
        </>
    )
}
