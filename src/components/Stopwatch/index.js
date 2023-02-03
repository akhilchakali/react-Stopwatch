// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    min: 0,
    sec: 0,
  }

  tick = () => {
    this.setState(prevState => ({sec: prevState.sec + 1}))
  }

  start = () => {
    this.timerId = setInterval(this.tick, 100)
  }

  stop = () => {
    clearInterval(this.timerId)
  }

  reset = () => {
    clearInterval(this.timerId)
    this.setState({min: 0, sec: 0})
  }

  render() {
    const {min, sec} = this.state
    return (
      <div className="main">
        <h1>Stopwatch</h1>
        <div className="cont">
          <p className="c">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            Timer
          </p>
          <h1>
            0{min}:0{sec}
          </h1>
          <div>
            <button className="red" type="button" onClick={this.start}>
              Start
            </button>
            <button className="green" type="button" onClick={this.stop}>
              Stop
            </button>
            <button className="orange" type="button" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
