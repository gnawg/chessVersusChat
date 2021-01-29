import React from "react";
import Chessboard from "chessboardjsx";
import { useDispatch, useSelector } from "react-redux";

import { pieceMoved } from "../store";

const ChessView = () => {
  const dispatch = useDispatch();
  const fen = useSelector((state) => state.chessGame.fen);

  function dropHandler({ sourceSquare, targetSquare, piece }) {
    // Check for promotion
    if (piece === "wP" && targetSquare[1] === "8") {
      console.log("white pawn promoting!");
    } else if (piece === "bP" && targetSquare[1] === "1") {
      console.log("black pawn promoting!");
    }

    dispatch(
      pieceMoved({ to: targetSquare, from: sourceSquare, promotion: "q" })
    );
  }

  return (
    <div className="view">
      <Chessboard position={fen} showNotation="true" onDrop={dropHandler} />
    </div>
  );
};

export default ChessView;
