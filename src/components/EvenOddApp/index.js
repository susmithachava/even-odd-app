import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, evenOrodd: 'Even'}

  onClickIncrement = () => {
    const rand = Math.floor(Math.random() * 100)
    this.setState({number: rand})
    if (rand % 2 === 0) {
      this.setState({evenOrodd: 'Even'})
    } else {
      this.setState({evenOrodd: 'Odd'})
    }
  }

  render() {
    const {number, evenOrodd} = this.state
    return (
      <div className="app-container">
        <div className="logic-container">
          <h1 className="heading">Count {number}</h1>
          <p className="count-type-para">Count is {evenOrodd}</p>
          <button
            type="button"
            className="increment-btn"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="note-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
