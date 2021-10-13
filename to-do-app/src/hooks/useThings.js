import { useEffect, useState } from "react"

export const useThing = () => {
    const [things,setThings] = useState(null);
    const [loading,setLoading] = useState(true);

    const requestThings = async() =>{
        setLoading(true)
        fetch("/api/things").then(res=>res.json()).then(res=>{
            setThings(res);
            setLoading(false);
        }).catch(err=>console.log(err));
    }
    useEffect(()=>{
        requestThings()
    },[]);

    return {things,loading}
}