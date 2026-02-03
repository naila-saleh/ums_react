import useAxios from "../../hooks/useAxios.jsx";
import Loader from "../../components/loader/Loader.jsx";
import User from "../../components/user/User.jsx";
import axios from "axios";
import {Bounce, toast} from "react-toastify";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Users() {
    const {data, loading, error} = useAxios(`${import.meta.env.VITE_BURL}/users?limit=1000`);
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
            toast.success('user deleted successfully', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }catch (e) {
            console.log(e.message);
        }
    }
    if (loading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <section className={"users my-5"}>
            <div className={"container text-center"}>
                <Link to={`/user/Create`} className={"btn btn-outline-dark mb-3"}>Create User</Link>
                <div className={"row g-3"}>
                    {data.users.map(user => (
                        <User user={user} onDelete={handleDelete}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
