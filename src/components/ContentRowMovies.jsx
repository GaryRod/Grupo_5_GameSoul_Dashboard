import React,{useEffect, useState} from 'react';
import SmallCard from './SmallCard';


              /*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let gamesInDB = {
  title: 'Games in Data Base',
  color: 'primary', 
  cuantity: ``,
  icon: 'fa-clipboard-list'

}
/* <!-- Total awards --> */

let totalAwards = {
  title:' Total awards', 
  color:'success', 
  cuantity: '79',
  icon:'fa-award'
}

/* <!-- Actors quantity --> */

let usersQuantity = {
  title:'Users quantity' ,
  color:'warning',
  cuantity:``,
  icon:'fa-user-check'
}

let cartProps = [gamesInDB, totalAwards, usersQuantity];









function ContentRowMovies(){
    const urlProducts = `/api/products/`
    const[products,setProducts] = useState(null)
    
    
    useEffect(()=>{
      fetchApiProducts()
    },[urlProducts])
  
    const fetchApiProducts = async()=>{
      const response = await fetch(urlProducts)
      const products = await response.json()
      setProducts(products)
      console.log(products)
    }

    const urlUsers = `/api/users/`
    const[users,setUsers] = useState(null)
    
    
    useEffect(()=>{
      fetchApiUsers()
    },[urlUsers])
  
    const fetchApiUsers = async()=>{
      const response = await fetch(urlUsers)
      const users = await response.json()
      setUsers(users)
      console.log(users)
    }





    return (
      <React.Fragment>
        
        
          {   products && users ? (  
            
            
        <div className="row">
          <template>
          {cartProps[0].cuantity = products.meta.count}
          {cartProps[2].cuantity = users.meta.count}
          </template>
          
        
          {cartProps.map((movie, i) => {
            return <SmallCard {...movie} key={i}  />;
          })}
        </div>):null}
      </React.Fragment>
    );
}

export default ContentRowMovies;