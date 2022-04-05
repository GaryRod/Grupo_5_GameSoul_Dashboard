import React, { useEffect, useState } from "react";
import Games from "./Games";

const GamesInDb = () => {
  const url = `/api/products`;

  const [product, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((product) => setData(product.meta.countByGenres));
  }, []);
  console.log(product);

  let categorias = [];

  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <template>
          {product.forEach((i) => {
            categorias.push(i.nombre);
          })}
        </template>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Cantidad de juegos por género
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {categorias.map((producto, index) => {
                console.log(categorias);
                return (
                  <Games
                    data={product[index].cantidad}
                    datam={producto}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GamesInDb;
