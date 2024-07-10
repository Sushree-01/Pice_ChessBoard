import './App.css';
import { useState } from 'react';
import { GameStatus } from './Component/GameStatus';
import { ChessBoard } from './Component/ChessBoard';
import { Move } from './Component/Move';
import { QuitBtn } from './Component/QuitBtn';
import "./styles.css";

function App() {
  const [position, setPosition] = useState({
    a1: 'wR', b1: 'wN', c1: 'wB', d1: 'wQ', e1: 'wK', f1: 'wB', g1: 'wN', h1: 'wR',
    a2: 'wP', b2: 'wP', c2: 'wP', d2: 'wP', e2: 'wP', f2: 'wP', g2: 'wP', h2: 'wP',
    a7: 'bP', b7: 'bP', c7: 'bP', d7: 'bP', e7: 'bP', f7: 'bP', g7: 'bP', h7: 'bP',
    a8: 'bR', b8: 'bN', c8: 'bB', d8: 'bQ', e8: 'bK', f8: 'bB', g8: 'bN', h8: 'bR',
  });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  const handleMove = (startSquare, endSquare) => {

    setPosition((prevPosition) => {
      const newPosition = { ...prevPosition };
      newPosition[endSquare] = newPosition[startSquare];
      delete newPosition[startSquare];
      return newPosition;
    });

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleMoveSubmit = (move) => {
    const [startSquare, endSquare] = move.split('-');
    handleMove(startSquare, endSquare);
  };

  const handleQuit = () => {
    setWinner(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="p-4">
      <GameStatus currentPlayer={currentPlayer} winner={winner} />
      <ChessBoard position={position} onMove={handleMove} />
      <Move onMoveSubmit={handleMoveSubmit} />
      <QuitBtn onQuit={handleQuit} />
    </div>
  );
}

export default App;
