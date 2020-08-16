import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./Board";
import Menu from "./Menu";

const MAX_MOVES = 9;

// Alternative array could be 1 dimentional with length 9
// and avoid the deep clone
const defaultBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function App() {
  // X player starts
  const [turn, setTurn] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [board, setBoard] = useState([...defaultBoard]);
  // Game always end after 9 moves
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState(0);

  // Run every time the board changes to check for End Of Game.
  useEffect(() => {
    if (checkGameEnd()) {
      setIsGameOver(true);
      const winner = turn === "X" ? "O" : "X";
      setWinner(winner);
    } else if (moves === MAX_MOVES) setIsGameOver(true);
  }, [board]);

  const newGame = () => {
    debugger;
    // create a copy to force render
    const newBoard = deepClone(defaultBoard);
    setBoard(newBoard);
    setIsGameOver(false);
    setTurn("X");
  };

  // There are 8 different ways to win.
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

  const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array));
  };

  const handleClick = (x, y) => {
    // Create a copy to force render
    if (board[x][y] !== "") return;
    const newBoard = deepClone(board);
    newBoard[x][y] = turn;
    setBoard(newBoard);
    turn === "X" ? setTurn("O") : setTurn("X");
    setMoves(moves + 1);
  };

  return (
    <div className="App">
      <Menu turn={turn} newGame={newGame} winner={winner} />
      <Board
        turn={turn}
        handleClick={handleClick}
        board={board}
        isGameOver={isGameOver}
        newGame={newGame}
      />
    </div>
  );
}

export default App;
