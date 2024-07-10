import React from "react";
export const GameStatus = ({ currentPlayer, winner }) => {
  return (
    <div>
      {winner ? (
        <h2>Winner: Player {winner}</h2>
      ) : (
        <h2>Current Turn: Player {currentPlayer}</h2>
      )}
    </div>
  );
};
