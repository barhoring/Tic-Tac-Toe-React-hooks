import React from "react";
import "./App.css";
import Row from "./Row";

const Board = ({ handleClick, board }) => {
  return (
    <div>
      <Row row={board[0]} />
      <Row row={board[1]} />
      <Row row={board[2]} />
    </div>
  );
};
export default Board;
