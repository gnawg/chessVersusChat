import React from "react";
import Chessboard from "chessboardjsx";
import { useDispatch, useSelector } from "react-redux";
import Chess from "chess.js";
// chess component for validation

import { pieceMoved } from "../store";

const ChessView = () => {
  const dispatch = useDispatch();
  const { fen, toMove } = useSelector((state) => state.chessGame);

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
      <h1>{toMove === "w" ? "White" : "Black"} To Move!</h1>

      <Chessboard position={fen} showNotation="true" onDrop={dropHandler} />

      <div>
        <button type="button">Start Game as Black</button>
        <button type="button">Start Game as White</button>
        <button type="button">Start Game as Random</button>
      </div>
    </div>
  );
};

export default ChessView;
