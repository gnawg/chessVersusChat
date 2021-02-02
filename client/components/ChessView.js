import React from "react";
import Chessboard from "chessboardjsx";
import { useDispatch, useSelector } from "react-redux";
import Chess from "chess.js";
// chess component for validation

import { pieceMoved } from "../store";

const ChessView = () => {
  const dispatch = useDispatch();
  const fen = useSelector((state) => state.chessGame.fen);

  function dropHandler({ sourceSquare, targetSquare, piece }) {
    const chessValidator = new Chess(fen);
    const moveObj = { to: targetSquare, from: sourceSquare, promotion: "q" };

    // Check for promotion
    if (piece === "wP" && targetSquare[1] === "8") {
      console.log("white pawn promoting!");
    } else if (piece === "bP" && targetSquare[1] === "1") {
      console.log("black pawn promoting!");
    }

    // Validate the move before sending it to redux
    if (chessValidator.move(moveObj)) {
      dispatch(pieceMoved(moveObj));
    }
  }

  return (
    <div className="view">
      <Chessboard position={fen} showNotation="true" onDrop={dropHandler} />
    </div>
  );
};

export default ChessView;
