import React,{ useState , useEffect } from 'react'

export const UseFetch = (url) => {
    const[data,setdata] = useState(null);



    useEffect(()=>{
      fetchApiProducts()
    },[url])


      const fetchApiProducts = async()=>{
      const response = await fetch(url)
      const products = await response.json()
      setdata(products)
      }


  return data;
}
    
  