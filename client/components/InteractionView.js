import React, { useState, useEffect } from "react";
import tmi from "tmi.js";

const InteractionView = () => {
  const [channel, setChannel] = useState("");

  const handleChannelInput = (evt) => {
    setChannel(evt.target.value);
  };

  const handleConnectChat = () => {
    const client = new tmi.Client({
      channels: [channel],
    });

    const success = client.connect();

    console.log(success);

    client.on("message", (chan, tags, message) => {
      console.log(`${tags["display-name"]}: ${message}`);
    });
  };

  return (
    <div>
      <input type="text" value={channel} onChange={handleChannelInput} />
      <button type="button" onClick={handleConnectChat} disabled={!channel}>
        {channel ? `Connect to ${channel} chat` : `Enter a channel`}
      </button>
    </div>
  );
};

export default InteractionView;
