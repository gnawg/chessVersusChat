const Chess = require("chess.js");

// App has one game instance. Redux exposes
// This is preferred over local state, since moves come from both chat interactions and user chessboard inputs.
// Chat interaction logic also requires knowledge of legal moves.
const game = Chess();

// Action Constants -- naming convention: VERBED_NOUN
export const MOVED_PIECE = "MOVED_PIECE";

// Thunk Creators -- naming convention: NOUN_VERBS

// Action Creators -- naming convention: NOUN_VERBED
export const PIECE_MOVED = ({ from, to, promotion }) => ({
  type: MOVED_PIECE,
  from,
  to,
  promotion,
});

// Initial State
const initialState = {
  position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", // FEN Starting position
  history: [],
};

// Reducer
export default function chessGameReducer(state = initialState, action) {
  switch (action.type) {
    case MOVED_PIECE:
      if (
        game.move({
          from: action.from,
          to: action.to,
          position: action.position,
        })
      ) {
        return game.fen();
      }
      return state;
    default:
      return state;
  }
}
