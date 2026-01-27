import React, {useEffect, useState} from 'react'
import axios from "axios";
import Loader from "../../components/loader/Loader.jsx";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getUsers = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BURL}/users?limit=1000`);
            setUsers(response.data.users);
        }catch (e) {
            setError(e);
        }finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getUsers();
    },[])
    if (loading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <section className={"users my-5"}>
            <div className={"container text-center"}>
                <div className={"row g-3"}>
                    {users.map(user => (
                        <div className={"col-md-4"} key={user.id}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{user.name}</h5>
                                    <p className={"card-text"}>{user.email}</p>
                                    <img src={user.imageUrl} className={"w-100"} alt={user.name}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
