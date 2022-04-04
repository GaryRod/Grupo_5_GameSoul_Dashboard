import React from 'react';
import { UseFetch } from '../assets/hooks/UseFetch';


function LastMovieInDb(){
    const url = '/api/products'
    const data = UseFetch(url)
    console.log(data)

    return(
        <React.Fragment>
            {data?(
                <div className="col-lg-6 mb-4">
                    {console.log(data.data.list[9].image)}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={data.data.list[9].image} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>{data.data.list[9].description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más</a>
                    </div>
                </div>
            </div>
            ):null}
        </React.Fragment>
    )
}

export default LastMovieInDb;
