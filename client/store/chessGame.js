import Chess from "chess.js";

const game = Chess();
/* One chessjs instance controls game logic, state, and history.
Components couple with chessjs via redux actions and reducers
Chessjs <--> Redux <--> React
Future plans include chatbot integration, which may move this control from redux to server
*/

// Action Constants -- naming convention: NOUN_VERBED
export const PIECE_MOVED = "PIECE_MOVED";

// Thunk Creators -- naming convention: verbingNoun

// Action Creators -- naming convention: nounVerbed
export const pieceMoved = ({ from, to, promotion, san }) => ({
  type: PIECE_MOVED,
  from,
  to,
  promotion,
  san,
});

// Initial State
const initialState = {
  fen: game.fen(),
  history: game.history(),
  pgn: game.pgn(),
  legalMoves: game.moves({ verbose: true }),
  toMove: game.turn(), // "b", "w"
};

// Reducer
export default function chessGameReducer(state = initialState, action) {
  // Chessjs instance is the single source of truth for game state, history, etc.
  // Redux controls data for display in components

  switch (action.type) {
    case PIECE_MOVED:
      if (action.san) game.move(action.san);
      else if (action.from && action.to) {
        const moveObj = {
          from: action.from,
          to: action.to,
          promotion: action.promotion,
        };

        game.move(moveObj);
      } else {
        const moves = game.moves();

        game.move(moves[Math.floor(Math.random() * moves.length)]);
      }

      return {
        ...state,
        fen: game.fen(),
        history: game.history(),
        pgn: game.pgn(),
        legalMoves: game.moves({ verbose: true }),
        toMove: game.turn(),
      };
    default:
      return state;
  }
}
