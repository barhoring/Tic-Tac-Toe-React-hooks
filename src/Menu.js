import React from "react";

const Menu = ({ turn, newGame, winner }) => {
  return (
    <div className="Menu">
      <div className="turn">{turn}'s turn</div>
      <button onClick={() => newGame()}>New Game</button>
      {winner ? <div>{winner} wins!</div> : <div>ss</div>}
    </div>
  );
};

export default Menu;
