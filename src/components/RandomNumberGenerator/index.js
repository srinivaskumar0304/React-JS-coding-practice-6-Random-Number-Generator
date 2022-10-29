// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onIncrementRandomCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="random-number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementRandomCount}
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
