import React from "react";

function ChatView() {
  return false ? (
    <iframe
      title="Twitch Chat"
      src="https://www.twitch.tv/embed/gnawg/chat?parent=localhost"
      height="500"
      width="300"
    />
  ) : (
    <div>Join a channel chat!</div>
  );
}

export default ChatView;
