import React from "react";

const Games = (props) => {
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card text-white bg-dark  shadow">
          <div className="card-body">
            <h5>
              {props.datam} : {props.data}
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}; 
export default Games;
