
import React,{useEffect, useState} from 'react';

import imagenFondo from '../assets/images/mandalorian.jpg';


function LastGameInDb(){
    const url = '/api/products'
    const [product,setData] = useState([])
    useEffect(()=>{
             fetch(url)
             .then(response=>response.json())
             .then(product=> setData(product.data.list.pop()))
    }, [])
    console.log(product)
    
    return (
      <React.Fragment>
        
          <div className="col-lg-6 mb-4">
            
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Ultimo producto agregado
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 40 + "rem" }}
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <p>{product.description}</p>
                <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  Ver mas
                </a>
              </div>
            </div>
          </div>
        
      </React.Fragment>
    );
}

export default LastGameInDb;