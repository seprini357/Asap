import React from "react";

const DashBoard = ({sensorData}) => {
  return <div>
    <pre>{JSON.stringify(sensorData, null, 2)}</pre> 
  </div>;
};


export default DashBoard;
