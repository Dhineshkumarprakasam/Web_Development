import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        if (!url) return;
        setLoading(true);
        setError(null);
        setData(null);

        let parsedUrl;
        try {
            parsedUrl = new URL(url);
        } catch (err) {
            setError(new Error("Invalid URL"));
            setLoading(false);
            return;
        }

        setTimeout(()=>{
            fetch(parsedUrl)
            .then((data)=> data.json())
            .then((res)=>setData(res))
            .catch((error)=>{
                setError(error);
            })
            .finally(()=>{
                setLoading(false);
            });
        },3000);
    },[url]);

    return [data,error,loading];
}

export default useFetch;
