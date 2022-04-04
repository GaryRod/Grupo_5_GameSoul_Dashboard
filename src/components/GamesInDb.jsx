import React,{useEffect, useState} from 'react'
import Games from './Games'
import { UseFetch } from '../assets/hooks/UseFetch'



const GamesInDb = () => {

  const url = `/api/products`

  const data =UseFetch(url)
/*  const url = `/api/products`
  const[data,setData] = useState(null)
  
  useEffect(()=>{
    fetchApi() 
   
  },[url])

  const fetchApi = async()=>{
    const response = await fetch(url)
    const e = await response.json()
    setData(e)
    console.log(e.meta.countByGenres[0].nombre)
  }*/

let categorias =[]



  return (
    <React.Fragment>
     
      { data ?(
               
       <div className="col-lg-6 mb-4">		
       		<template>
             {
               data.meta.countByGenres.forEach(i => {
                 
                categorias.push(i.nombre)
              })
              
             }
           </template>
       <div className="card shadow mb-4">
           <div className="card-header py-3">
               <h6 className="m-0 font-weight-bold text-gray-800">Cantidad de juegos por genero</h6>
           </div>
           <div className="card-body">
               <div className="row">
                
                   {
                      categorias.map((producto,index)=>{
                        console.log(categorias)
                        return <Games  data={data.meta.countByGenres[index].cantidad} datam={producto}  key= {index}/>
                        
                    })
                    }
                       
                   
               </div>
           </div>
       </div>
   </div>
        ):null
      }
      
    </React.Fragment>
  )
}

export default GamesInDb
