import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  renderProfile() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h3>Your Profile</h3>
        <img src={player.get("avatar")} className="profile-avatar" />
      </div>
    );
  }

  renderNumberOfGuess() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h4>Total Of Guess</h4>
        <span>{(player.get("numberOfGuess") || 0)}</span>
      </div>
    );
  }

  render() {
    const { stage } = this.props;

    return (
      <aside className="player-profile">
        {this.renderProfile()}
        {this.renderNumberOfGuess()}
        <Timer stage={stage} />
      </aside>
    );
  }
}
