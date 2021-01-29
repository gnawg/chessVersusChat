const Chess = require("chess.js");

/*
App has one chessjs instance that controls game logic. Redux exposes position and other data, and handles move logic as part of the reducer.
This is preferred over local state, since moves come from multiple sources (chat interaction and user inputs)
Chat interaction feature also requires knowledge of legal moves state.
*/
const game = Chess();

// Action Constants -- naming convention: NOUN_VERBED
export const PIECE_MOVED = "PIECE_MOVED";

// Thunk Creators -- naming convention: NOUN_VERBS

// Action Creators -- naming convention: nounVerbed
export const pieceMoved = ({ from, to, promotion }) => ({
  type: PIECE_MOVED,
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
  // Redux store is the single source of truth for game position, not the chessjs instance state.
  game.load(state.position);

  switch (action.type) {
    case PIECE_MOVED:
      const attemptMove = {
        from: action.from,
        to: action.to,
        promotion: action.promotion,
      };

      const moveSuccess = game.move(attemptMove);

      if (moveSuccess) {
        return {
          ...state,
          position: game.fen(),
          history: [...state.history, moveSuccess],
        };
      }

      return state;
    default:
      return state;
  }
}
