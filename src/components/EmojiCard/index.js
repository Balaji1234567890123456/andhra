// Write your code here.

import './index.css'
const EmojiCard = props => {
  const {emojiDetails, onClickItem} = props
  const {id, emojiUrl} = emojiDetails
  const v = () => {
    onClickItem(id)
  }
  return (
    <li className="joy">
      <img src={emojiUrl} onClick={v} />
    </li>
  )
}
export default EmojiCard
/*
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
*/
