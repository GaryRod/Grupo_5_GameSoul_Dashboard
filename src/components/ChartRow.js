import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.id}</td>
      <td>{props.console}</td>
      <td>{props.genre}</td> 
      <td>{props.price}</td>
      <td>{props.stock}</td>
    </tr>
  ); 
}

export default ChartRow;
