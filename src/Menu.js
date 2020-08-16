import React from "react";

const Menu = ({ turn, newGame, winner, isGameOver }) => {
  return (
    <div
      className="Menu"
      style={{ borderColor: "black", borderStyle: "solid" }}
    >
      {!isGameOver && (
        <h2
          className="turn"
          style={{ marginTop: "50px", marginBottom: "10px" }}
        >
          {turn}'s turn
        </h2>
      )}
      <button onClick={() => newGame()}>New Game</button>
      {winner ? <h2>{winner} wins!</h2> : ""}
      {!winner && isGameOver && <h2>TIE</h2>}
    </div>
  );
};

export default Menu;
