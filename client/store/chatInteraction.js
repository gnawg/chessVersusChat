// Reducer is responsible for controlling chat interaction
// Doesn't know anything about chess -- only handles config and vote-keeping interactions

// Action Constants -- naming convention: NOUN_VERBED

export const CHAT_CONNECTED = "CHAT_CONNECTED";
export const VOTE_RECEIVED = "VOTE_RECEIVED";

// Thunk Creators -- naming convention: verbingNoun

export const receivingMessage = (name, message) => (dispatch, getState) => {
  // Get current legal moves
  const {
    chessGame: { legalMoves },
  } = getState();

  // Check if the message equals the san for a legal move (i.e. is a vote)
  if (legalMoves.some((move) => move.san === message)) {
    console.log("dispatching vote", message);
    dispatch(voteReceived(name, message));
  } else {
    console.log(`message ${message} is not a vote`);
  }
};

// Action Creators -- naming convention: nounVerbed
export const voteReceived = (name, vote) => ({
  type: VOTE_RECEIVED,
  name,
  vote,
});

export const chatConnected = (channel) => ({
  type: CHAT_CONNECTED,
  channel,
});

// Initial State
const initialState = {
  channel: "",
  playerColor: "white",
  votes: {}, // {"san": 23}
  voters: {}, // {"voterName": "san"}
};

// Reducer
export default function chatInteractionReducer(state = initialState, action) {
  switch (action.type) {
    case VOTE_RECEIVED:
      const prevVote = state.voters[action.name];
      const newVoteCount = state.votes[action.vote]
        ? state.votes[action.vote] + 1
        : 1; // If no vote exists, set it to 1

      // New voter (voter list doesn't have a move for this voter)
      if (!prevVote) {
        return {
          ...state,
          votes: { ...state.votes, [action.vote]: newVoteCount },
          voters: { ...state.voters, [action.name]: action.vote },
        };
      }
      // Voting for a vote that is different from the current vote
      else if (prevVote !== action.vote) {
        const prevVoteCount = state.votes[prevVote];
        return {
          ...state,
          votes: {
            ...state.votes,
            [prevVote]: prevVoteCount - 1,
            [action.vote]: newVoteCount,
          },
          voters: { ...state.voters, [action.name]: action.vote },
        };
      }

      return state;
    case CHAT_CONNECTED:
      return { ...state, channel: action.channel };
    default:
      return state;
  }
}
