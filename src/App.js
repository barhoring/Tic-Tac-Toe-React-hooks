import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [turn, setTurn] = useState("white");
  const [isGmaeOver, setIsGameOver] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  // Run every time the board changes to check for End Of Game.
  useEffect(() => {
    if (checkGameEnd()) {
      setIsGameOver(true);
    }
  }, [board]);

  // There are 8 different way to win.
  // Check all of them
  const checkGameEnd = () => {
    if (
      (board[0][0] &&
        board[0][0] === board[0][1] &&
        board[0][1] === board[0][2]) ||
      (board[1][0] &&
        board[1][0] === board[1][1] &&
        board[1][1] === board[1][2]) ||
      (board[2][0] &&
        board[2][0] === board[2][1] &&
        board[2][1] === board[2][2]) ||
      (board[0][0] &&
        board[0][0] === board[1][0] &&
        board[1][0] === board[2][0]) ||
      (board[0][1] &&
        board[0][1] === board[1][1] &&
        board[1][1] === board[2][1]) ||
      (board[0][2] &&
        board[0][2] === board[1][2] &&
        board[1][2] === board[2][2]) ||
      (board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]) ||
      (board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0])
    )
      return true;
  };

  const handleClick = (x, y, color) => {
    // copy the board
    const newBoard = [...board];
    board[x][y] = color;
    setBoard(newBoard);
  };

  debugger;
  if (!isGmaeOver)
    return (
      <div className="App">
        <div>{turn}'s turn</div>
        <Board handleClick={handleClick} board={board} />
      </div>
    );
  else return <div>Game Over</div>;
}

export default App;
