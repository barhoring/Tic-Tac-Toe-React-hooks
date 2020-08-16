import React from "react";
import "./App.css";
import Cell from "./Cell";

const Board = ({ handleClick, board, isGameOver, newGame, turn }) => {
  return isGameOver ? (
    <>
      <div className="Board" style={{ flexDirection: "column" }}>
        <div>
          <button onClick={() => newGame()}>New Game</button>
        </div>
        <div>Game Over</div>
        <div>{turn === "X" ? "O" : "X"} wins!</div>
      </div>
    </>
  ) : (
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
  );
};
export default Board;
