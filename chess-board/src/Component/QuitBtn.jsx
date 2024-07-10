import React from "react";

export const QuitBtn = ({ onQuit }) => {
  return (
    <button onClick={onQuit} className="p-2 bg-red-500 text-white">
      Quit
    </button>
  );
};
