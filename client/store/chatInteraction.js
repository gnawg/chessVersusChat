// Responsible for controlling chat interaction
import tmi from "tmi.js";

// Action Constants -- naming convention: NOUN_VERBED
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED";
export const CHAT_CONNECTED = "CHAT_CONNECTED";

// Action Creators -- naming convention: nounVerbed
export const messageReceived = (payload) => ({
  type: MESSAGE_RECEIVED,
  payload,
});

export const chatConnected = (channel) => ({
  type: CHAT_CONNECTED,
  channel,
});

// Thunk Creators -- naming convention: verbingNoun
export const connectingToChat = (channel) => async (dispatch) => {
  const client = new tmi.Client({
    channels: [channel],
  });

  const result = await client.connect();

  if (client) {
    console.log(result);
    client.on("message", (chan, tags, message) => {
      console.log(`${tags["display-name"]}: ${message}`);
    });
    dispatch(chatConnected(channel));
  }
};

/* export const messageReceived = (payload) => ({
  type: MESSAGE_RECEIVED,
  payload,
}); */

// Initial State
const initialState = {
  channel: "",
};

// Reducer
export default function chatInteractionReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state;
    case CHAT_CONNECTED:
      return { ...state, channel: action.channel };
    default:
      return state;
  }
}
