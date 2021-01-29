import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectingToChat } from "../store";

const InteractionView = () => {
  const dispatch = useDispatch();
  const legalMoves = useSelector((state) => state.chessGame.legalMoves);
  const channel = useSelector((state) => state.chatInteraction.channel);
  const [channelInput, setChannelInput] = useState("");

  const handleChannelInput = (evt) => {
    setChannelInput(evt.target.value);
    console.log(channelInput);
  };

  const handleConnectChat = () => {
    dispatch(connectingToChat(channelInput));
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
          <div>moves: {legalMoves}</div>
        </>
      ) : (
        <h1>Not connected</h1>
      )}
    </div>
  );
};

export default InteractionView;
