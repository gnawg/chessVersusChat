import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmi from "tmi.js";
import { chatConnected, voteReceived } from "../store";

const InteractionView = () => {
  const dispatch = useDispatch();
  const { turn, legalMoves } = useSelector((state) => state.chessGame);
  const { playerColor, channel, votes } = useSelector(
    (state) => state.chatInteraction
  );
  const [channelInput, setChannelInput] = useState("");
  const [tmiClient, setTmiClient] = useState();

  const handleChannelInput = (evt) => {
    setChannelInput(evt.target.value);
  };

  const handleConnectChat = async () => {
    const client = new tmi.Client({
      channels: [channelInput],
    });

    await client.connect();

    client.on("message", (chan, tags, message) => {
      if (playerColor == turn) return; // Only collect votes

      console.log(`${tags["display-name"]}: ${message}`);
      // Check if the message equals the san for a legal move (i.e. is a vote)
      if (legalMoves.some((move) => move.san === message)) {
        console.log("dispatching vote", message);
        dispatch(voteReceived(tags["display-name"], message));
      }
    });
    dispatch(chatConnected(channelInput));
    setTmiClient(client);
  };

  const handleDisconnectChat = async () => {
    tmiClient.disconnect();
    dispatch(chatConnected(""));
  };

  return (
    <div className="view">
      {/* Connect to chat config */}
      <div>
        <input type="text" value={channelInput} onChange={handleChannelInput} />
        <button
          type="button"
          onClick={handleConnectChat}
          disabled={!channelInput}
        >
          {channelInput ? `Connect to ${channelInput} chat` : `Enter a channel`}
        </button>
      </div>

      {/* After connecting to chat */}
      {channel ? (
        <>
          <h1>Connected to {channel}!</h1>
          <div>
            moves:{" "}
            {legalMoves.map((move) => (
              <div>{`${move.san}: ${votes[move.san] || 0}`}</div>
            ))}
          </div>
        </>
      ) : (
        <h1>Not connected</h1>
      )}
    </div>
  );
};

export default InteractionView;
