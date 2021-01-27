import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import Chess from "chess.js";
// import game from "../ChessController";

const game = new Chess();

const ChessView = () => {
  const [position, setPosition] = useState(game.fen());

  function dropHandler({ sourceSquare, targetSquare }) {
    const move = game.move({ from: sourceSquare, to: targetSquare });

    if (move) {
      setPosition(game.fen());
    } else {
      console.log("bad move", sourceSquare, targetSquare);
    }
  }

  return <Chessboard position={position} onDrop={dropHandler} />;
};

export default ChessView;
