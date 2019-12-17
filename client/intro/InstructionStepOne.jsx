import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions</h1>
          <p>
            You must guess a number between 0 and 100. Each round, you make a guess, and
            you will be told if your guess was above the number to guess, below the number
            to guess, or correct.
          </p>

          <p>
            <button type="button" onClick={onNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
