import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    const questionText = round.get('question');
    return (
      <div className="task-stimulus">
        <div className="task-question">
          <p>{questionText}</p>
        </div>
      </div>
    );
  }
}
