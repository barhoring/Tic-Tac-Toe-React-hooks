import React from "react";

const Menu = ({ turn, newGame, winner, isGameOver }) => {
  return (
    <div className="Menu">
      {!isGameOver && <div className="turn">{turn}'s turn</div>}
      <button onClick={() => newGame()}>New Game</button>
      {winner ? <div>{winner} wins!</div> : ""}
      {!winner && isGameOver && <div>TIE</div>}
    </div>
  );
};

export default Menu;
