import React,{useEffect, useState} from 'react';
import SmallCard from './SmallCard'

let gamesInDB = {
  title: 'Total de juegos',
  color: 'primary', 
  quantity: ``,
  icon: 'fa-gamepad'
}

let totalCategorys = {
  title:' Total de géneros', 
  color:'success', 
  quantity: '79',
  icon:'fa-paperclip'
}

let usersQuantity = {
  title:'Total de usuarios' ,
  color:'warning',
  quantity:``,
  icon:'fa-user-check'
}

let cartProps = [gamesInDB, totalCategorys, usersQuantity];

function ContentRowSmallCards(){
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
          {cartProps[0].quantity = products.meta.count}
          {cartProps[2].quantity = users.meta.count}
          {cartProps[1].quantity = products.meta.countByGenres.length}
          </template>
          
        
          {cartProps.map((movie, i) => {
            return <SmallCard {...movie} key={i}  />;
          })}
        </div>):null}
      </React.Fragment>
    );
}

export default ContentRowSmallCards;