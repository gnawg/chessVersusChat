import React from "react";
import { ChatView, ChessView, InteractionView } from "./components";

const App = () => (
  <div id="view-container">
    {/* Displays the game and related information */}
    <ChessView />

    {/* Interaction view -- displays and configures chat interaction */}
    <InteractionView />

    {/* Wrapper for the embedded twitch chat -- currently unrelated to the interaction view */}
    <ChatView />
  </div>
);

export default App;
