import React from "react";

const Cell = ({ handleClick, content }) => {
  return (
    <div className="Box" onClick={handleClick}>
      {content}
    </div>
  );
};

export default Cell;
