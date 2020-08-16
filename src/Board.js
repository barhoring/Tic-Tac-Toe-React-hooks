import React from "react";
import "./App.css";
import Cell from "./Cell";

const Board = ({ handleClick, board }) => {
  return (
    <div style={{ width: "500px", display: "flex", flexWrap: "wrap" }}>
      {[0, 1, 2].map((row, index) => {
        return [0, 1, 2].map((col, index) => {
          return (
            <Cell
              handleClick={() => handleClick(row, col)}
              content={board[row][col]}
            />
          );
        });
      })}
    </div>
  );
};
export default Board;
