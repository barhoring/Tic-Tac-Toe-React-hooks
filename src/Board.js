import React from "react";
import "./App.css";
import Cell from "./Cell";

const Board = ({ handleClick, board, isGameOver }) => {
  return isGameOver ? (
    <>
      <div className="Board border center">
        <div style={{ flexDirection: "column", alignItems: "center " }}>
          <h1>Game Over</h1>
        </div>
      </div>
    </>
  ) : (
    <div className="center border grey">
      <div className="Board">
        {[0, 1, 2].map((row, index) => {
          return [0, 1, 2].map((col, index) => {
            return (
              <Cell
                key={`${row}${col}`}
                handleClick={() => handleClick(row, col)}
                content={board[row][col]}
              />
            );
          });
        })}
      </div>
    </div>
  );
};
export default Board;
