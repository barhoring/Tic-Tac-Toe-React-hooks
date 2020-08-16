import React from "react";
import "./App.css";

const Row = ({ row }) => {
  return (
    <div className="Row">
      <div className="Box">{row[0]}</div>
      <div className="Box">{row[1]}</div>
      <div className="Box">{row[2]}</div>
    </div>
  );
};
export default Row;
