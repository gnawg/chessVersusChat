import Chess from "chess.js";

const game = Chess();
/* One chessjs instance controls game logic, state, and history.
Components couple with chessjs via redux actions and reducers
Chessjs <--> Redux <--> React
Future plans include chatbot integration, which would be run serverside,
This scheme helps with future changes, even if it's currently redundant
*/

// Action Constants -- naming convention: NOUN_VERBED
export const PIECE_MOVED = "PIECE_MOVED";

// Thunk Creators -- naming convention: verbingNoun

// Action Creators -- naming convention: nounVerbed
export const pieceMoved = ({ from, to, promotion }) => ({
  type: PIECE_MOVED,
  from,
  to,
  promotion,
});

// Initial State
const initialState = {
  fen: game.fen(),
  history: game.history(),
  pgn: game.pgn(),
  legalMoves: game.moves(),
};

// Reducer
export default function chessGameReducer(state = initialState, action) {
  // Chessjs instance is the single source of truth for game state, history, etc.
  // Redux controls data for display in components

  switch (action.type) {
    case PIECE_MOVED:
      const attemptMove = {
        from: action.from,
        to: action.to,
        promotion: action.promotion,
      };

      game.move(attemptMove);

      return {
        ...state,
        fen: game.fen(),
        history: game.history(),
        pgn: game.pgn(),
        legaMoves: game.moves(),
      };
    default:
      return state;
  }
}
