import React from "react";
import { useSelector } from "react-redux";

const ConfigView = () => {
  const { channel } = useSelector((state) => state.chatInteraction);

  return (
    <div className="view">
      <form>
        <fieldset>
          <legend>Connection Settings</legend>
          <div className="config-item">
            <label htmlFor="player-name">Name: </label>
            <input
              type="text"
              id="player-name"
              placeholder={channel || "default: channel name"}
            ></input>
            <button type="button">Set</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Timer Controls</legend>
          Timer is active
          <button type="button">⏯️ Start/Pause Timer</button>
          <button type="button">⏹️ Stop and Reset Timer</button>
          (Votes will continue to be counted)
          <div className="config-item">
            <label htmlFor="voting-time">Time to vote (s): </label>
            <input
              type="number"
              id="voting-time"
              placeholder={"default: 30 seconds"}
            ></input>
            <button type="button">Set</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Voting Controls</legend>
          Votes are currently being counted
          <div className="config-item">
            <label htmlFor="player-name">Name: </label>
            <input
              type="text"
              id="player-name"
              placeholder={channel || "default: channel name"}
            ></input>
            <button type="button">Set</button>
          </div>
          <div className="config-item">
            <label htmlFor="voting-time">Time to vote (s): </label>
            <input
              type="number"
              id="voting-time"
              placeholder={"default: 30 seconds"}
            ></input>
            <button type="button">Set</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>PGN Header Settings</legend>

          <div className="config-item">
            <label htmlFor="player-name">Player Name: </label>
            <input
              type="text"
              id="player-name"
              placeholder={channel || "default: channel name"}
            ></input>
          </div>

          <div className="config-item">
            <label htmlFor="chat-name">Chat Name: </label>
            <input
              type="text"
              id="chat-name"
              placeholder={'default: "Chat"'}
            ></input>
          </div>

          <div className="config-item">
            <label htmlFor="pgn-event">Event Name: </label>
            <input type="text" id="pgn-event" placeholder={"default: "}></input>
          </div>

          <div className="config-item">
            <label htmlFor="pgn-site">Site: </label>
            <input
              type="text"
              id="pgn-site"
              placeholder={"default: ChessVsChat"}
            ></input>
          </div>

          <div className="config-item">
            <label htmlFor="pgn-date">Date: </label>
            <input
              type="date"
              id="pgn-date"
              placeholder={"default: today"}
            ></input>
          </div>

          <div className="config-item">
            <label htmlFor="pgn-round">Round: </label>
            <input
              type="number"
              id="pgn-round"
              placeholder={"default: 1"}
            ></input>
          </div>
          <button type="button">Set PGN header</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ConfigView;
