/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
class EmojiGame extends Component {
  state = {
    clickedList: [],
    isGame: true,
    topScore: 0,
  }
  onResetGame = () => {
    this.setState({isGame: true, clickedList: []})
  }

  onFinishSetScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }

    this.setState({isGame: false, topScore: newScore})
  }
  onClickEmoji = id => {
    const {clickedList} = this.state
    const {emojisList} = this.props
    const h = clickedList.includes(id)
    const v = emojisList.length - 1 === clickedList.length
    if (h) {
      this.onFinishSetScore(clickedList.length)
    } else {
      if (v) {
        this.onFinishSetScore(emojisList.length)
      } else {
        this.setState(p => ({clickedList: [...p.clickedList, id]}))
      }
    }
  }
  onShuffle = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  onRenderEmojis = () => {
    const y = this.onShuffle()
    return (
      <ul>
        {y.map(eachItem => (
          <EmojiCard
            key={eachItem.id}
            emojiDetails={eachItem}
            onClickItem={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }
  onRenderScoreCard = () => {
    const {clickedList} = this.state
    const {emojisList} = this.props
    const won = clickedList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={won}
        boy={this.onResetGame}
        p={clickedList.length}
      />
    )
  }
  render() {
    const {isGame, clickedList, topScore} = this.state

    return (
      <div className="balu">
        {isGame &&<NavBar score={clickedList.length} topScore={topScore} />}
        {isGame ? this.onRenderEmojis() : this.onRenderScoreCard()}
      </div>
    )
  }
}
export default EmojiGame

/*
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    console.log(shuffledEmojisList)

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state
    console.log(clickedEmojisList)
    console.log(clickedEmojisList.length)

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
*/