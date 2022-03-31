import React,{ useState , useEffect } from 'react'

export const UseFetch = (url) => {
    const[data,Setdata] = useState(null);
    const [error , setError] = useState('');
    const [loading, setLoading]= useState(false);


    useEffect(()=>{
        setLoading(true)
        fetch(url)
            .then((res)=> res.json())
            .then((pepe)=> Setdata(pepe))
            .catch(e=>setError('Error de servidor'))
            .finally(()=> setLoading(false))
    },[url])
  return {data, error , loading};
}