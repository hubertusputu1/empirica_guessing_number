import React from "react";

export default class TaskResponse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answer: '',
      message: ''
    }
  }

  handleChange = el => {
    this.setState({
      answer: el.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player, round } = this.props
    const { answer } = this.state
    const secretNumber = round.get('correctAnswer')
    let numberOfGuess = player.get('numberOfGuess') + 1

    player.set("numberOfGuess", numberOfGuess)
        
    if(secretNumber === parseInt(answer)) {
      player.set("isCorrect", true)
      this.setState({
        message: 'Correct!'
      })
      setTimeout(() => {
        player.stage.submit();
      }, 1000)
    } else if( secretNumber > parseInt(answer)) {
      this.setState({
        message: 'Below the number to guess'
      })
    } else {
      this.setState({
        message: 'Above the number to guess'
      })
    }
  };

  renderInput() {
    const { answer } = this.state
    
    return ( 
      <input
        style={{ width: '100%', height: '30px'}}
        type={"number"}
        min={0}
        onChange={this.handleChange}
        value={answer}
        required
      />
    )
  }

  render() {
    const { message } = this.state
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput()}
          <button style={{display: 'block', width: '100%' }} type="submit">Submit</button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '14px', fontWeight: 'bold', color: 'red'}}>
          {message}
        </p>
      </div>
    );
  }
}
