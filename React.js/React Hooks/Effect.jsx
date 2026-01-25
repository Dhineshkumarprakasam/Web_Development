import { useState, useEffect } from "react";

//useEffect is used for do something after mouting a component
const Effect = () =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    async function fetch_posts(){
        setLoading(true);
        await new Promise(resolve=>setTimeout(resolve,5000));
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);
        });
    }

    useEffect(()=>{
        fetch_posts();
    },[]); //[] is dependency - based on when it must rerun eg. [userid,page] if fetch_posts gives result based on prams userid

    if(loading){
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status"></div>
            </div>
        );
    }

    if (error){
        return (
            <div>Error:{error.message}</div>
        )
    }
    else{
        return (
        <>
            <ul>
                {data && data.map((item)=>{
                   return <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                   </li>
                })}
            </ul>
        </>
    )
    }
}

export default Effect;