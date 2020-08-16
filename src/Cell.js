import React from "react";

const Cell = ({ handleClick, content }) => {
  return (
    <div className="Cell flex-center" onClick={handleClick}>
      {content}
    </div>
  );
};

export default Cell;
