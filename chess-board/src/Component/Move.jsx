import React, { useState } from "react";

export const Move = ({ onMoveSubmit }) => {
  const [move, setMove] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onMoveSubmit(move);
    setMove("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={move}
        onChange={(e) => setMove(e.target.value)}
        placeholder="Enter your move"
        className="p-2 border"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Submit
      </button>
    </form>
  );
};
