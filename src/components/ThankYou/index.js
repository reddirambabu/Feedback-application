import './index.css'

const ThankYou = props => {
  const {loveEmojiUrl} = props

  return (
    <div className="thankyou-container">
      <img src={loveEmojiUrl} alt="love emoji" className="image" />
      <h1 className="heading">Thank You</h1>
      <p className="description">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default ThankYou
