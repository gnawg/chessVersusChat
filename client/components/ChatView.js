import React from "react";
import { useSelector } from "react-redux";

function ChatView() {
  const channel = useSelector((state) => state.chatInteraction.channel);

  return (
    <div className="view">
      {channel ? (
        <iframe
          title="Twitch Chat"
          src={`https://www.twitch.tv/embed/${channel}/chat?parent=localhost`}
          height="500"
          width="300"
        />
      ) : (
        <div>Join a channel chat!</div>
      )}
    </div>
  );
}

export default ChatView;
