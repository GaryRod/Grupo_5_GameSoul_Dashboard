import React,{useEffect,useState} from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


function Chart() {
  const url = `/api/products/`;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchApi();
  }, [url]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const e = await response.json();
    setData(e);
    console.log(e.data.list);
  };

  return (
    /* <!-- DataTales Example --> */
    <React.Fragment>
        { data?(
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Id</th>
                  <th>Consola</th>
                  <th>Género</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Título</th>
                  <th>Id</th>
                  <th>Consola</th>
                  <th>Género</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </tfoot>
              <tbody>
                {data.data.list.map((row, i) => {
                  return <ChartRow {...row} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>):null}
    </React.Fragment>
  );
}

export default Chart;