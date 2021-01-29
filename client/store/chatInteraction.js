// Responsible for controlling chat interaction

// Action Constants -- naming convention: NOUN_VERBED
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED";

// Thunk Creators -- naming convention: NOUN_VERBS

// Action Creators -- naming convention: nounVerbed
export const messageReceived = (payload) => ({
  type: MESSAGE_RECEIVED,
  payload,
});

// Initial State
const initialState = {
  // Array of currently legal moves and votes
  legalMoves: [
    {
      move: {
        // move object from verbose move
        color: "b", // b || w
        from: "a2", // square
        to: "a3", // square
        flags: "n",
        /*
				Flags can include one or more of the following characters
				'n' - a non-capture
				'b' - a pawn push of two squares
				'e' - an en passant capture
				'c' - a standard capture
				'p' - a promotion
				'k' - kingside castling
				'q' - queenside castling
				*/
        piece: "p",
        san: "a3",
        // # a captured: key is included when the move is a capture
        // # a promotion: key is included when the move is a promotion
      },
      votes: 0,
    },
  ],
};

// Reducer
export default function chatInteractionReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state;
    default:
      return state;
  }
}
