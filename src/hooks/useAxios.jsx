import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function UseAxios(path) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getData = async () => {
        try{
            const response = await axios.get(path);
            setData(response.data);
        }catch (e) {
            setError(e);
        }finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    return {data, loading, error}
}