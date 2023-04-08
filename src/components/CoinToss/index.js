// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {isHeads: 0, heads: 0, tails: 0}

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult) {
      this.setState(prevState => ({
        isHeads: tossResult,
        tails: prevState.tails + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: tossResult,
        heads: prevState.heads + 1,
      }))
    }
  }

  render() {
    const {isHeads, heads, tails} = this.state
    const tossImage = isHeads ? tailsImage : headsImage

    const total = heads + tails

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img className="image" src={tossImage} alt="toss result" />
          <button onClick={this.onCoinToss} type="button" className="button">
            Toss Coin
          </button>
          <div className="toss-result-card">
            <p className="total">total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
