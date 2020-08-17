import React from "react";

const Menu = ({ turn, newGame, winner, isGameOver }) => {
  return (
    <div className="Menu border">
      <div style={{ padding: "20px" }}>
        {!isGameOver && <h1 className="turn">{turn}'s turn</h1>}
        <button className="button" onClick={() => newGame()}>
          New Game
        </button>
        {winner ? <h2>{winner} wins!</h2> : ""}
        {!winner && isGameOver && <h2>TIE</h2>}
      </div>
    </div>
  );
};

export default Menu;
