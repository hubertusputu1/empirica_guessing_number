import React from "react";

export default class Thanks extends React.Component {
  static stepName = "Thanks";


  render() {
    const { player } = this.props
    const isCorrect = player.get('isCorrect')
    const numberOfGuess = player.get('numberOfGuess')
    const message = [
      `You succeed to guess the secret number. It took you ${ numberOfGuess } number of guess(es)`,
      `You failed to guess the secret number, It took you ${ numberOfGuess } number of guess(es)`
    ]
    return (
      <div>
        <div>
          <h3 style={{textAlign: "center"}}>Finished!</h3>
          <p style={{textAlign: "center"}}>
            {isCorrect ? message[0] : message[1]}
          </p>
        </div>
      </div>
    );
  }
}
