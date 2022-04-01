import React,{useEffect, useState} from 'react'
import Games from './Games'
const GamesInDb = () => {

  const url = `/api/products`
  const[data,setData] = useState(null)
  
  useEffect(()=>{
    fetchApi()
  },[url])

  const fetchApi = async()=>{
    const response = await fetch(url)
    const e = await response.json()
    setData(e)
    console.log(e.meta)
  }

  return (
    <React.Fragment>
      { data ?(
       
       <div className="col-lg-6 mb-4">						
       <div className="card shadow mb-4">
           <div className="card-header py-3">
               <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
           </div>
           <div className="card-body">
               <div className="row">
                   {
                       
                      <Games  data={data} />
                       
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
