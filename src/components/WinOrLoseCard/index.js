// Write your code here.
import './index.css'
const WinOrLoseCard = props => {
  const {isWon, boy, p} = props
  const u = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const v = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const j = isWon ? u : v
  const k = isWon ? 'Best Score' : 'Score'
  const o = isWon ? 'You Won' : 'You lose'
  const g = () => {
    boy()
  }
  return (
    <div className="roy">
      <div className="pol">
        <h1>{o}</h1>
        <p>{k}</p>
        <p>{p}/12</p>
        <button onClick={g}>Play Again</button>
      </div>
      <img src={j} />
    </div>
  )
}
export default WinOrLoseCard
/*
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
*/