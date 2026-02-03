import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import {Bounce, toast} from "react-toastify";

export default function Create() {
    const {register, handleSubmit} = useForm();
    const [preview, setPreview] = useState(null);
    const CreateUser = async (data) => {
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email',data.email);
            formData.append('age',data.age);
            formData.append('image',data.image[0]);
            const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, formData);
            console.log(response);
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
        }catch (e){
            console.log(e.message);
        }
    }
    const handleImagePreview = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <section className={`createUser py-5`}>
            <div className={`container`}>
                <form onSubmit={handleSubmit(CreateUser)} encType={"multipart/form-data"}>
                    <div className={`form-floating mb-3`}>
                        <input {...register('name')} type="text" className="form-control" id="floatingInput" placeholder="name"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className={`form-floating mb-3`}>
                        <input {...register('email')} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className={`form-floating mb-3`}>
                        <input {...register('age')} type="number" className="form-control" id="floatingInput" placeholder="age"/>
                        <label htmlFor="floatingInput">Age</label>
                    </div>
                    <div className={`form-floating mb-3 text-center`}>
                        <input {...register('image')} onChange={handleImagePreview} type="file" className="form-control" id="floatingInput" placeholder="image"/>
                        <label htmlFor="floatingInput">Image</label>
                        {preview && <img src={preview} alt="preview" className="w-50 mt-3 rounded-2"/>}
                    </div>
                    <button className="btn btn-outline-dark" type="submit">Create</button>
                </form>
            </div>
        </section>
    )
}
