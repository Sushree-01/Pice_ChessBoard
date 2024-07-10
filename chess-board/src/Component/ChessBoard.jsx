import { Chessboard } from "react-chessboard";
export const ChessBoard = ({ onMove, position }) => {
  const handlePieceDrop = (startSquare, endSquare) => {
    onMove(startSquare, endSquare);
  };

  return (
    <Chessboard
      boardWidth={600}
      position={position}
      onPieceDrop={handlePieceDrop}
    />
  );
};
