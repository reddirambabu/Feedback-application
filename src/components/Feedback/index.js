// Write your React code here.
import {Component} from 'react'
import Emojis from '../Emojis'
import ThankYou from '../ThankYou'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  isClickedEmojis = () => {
    this.setState(previousState => ({isClicked: !previousState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {isClicked ? (
          <ThankYou loveEmojiUrl={loveEmojiUrl} />
        ) : (
          <div className="card-container">
            <h1 className="description">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojis-container" onClick={this.isClickedEmojis}>
              {emojis.map(eachEmojis => (
                <Emojis key={eachEmojis.id} emojisDetails={eachEmojis} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
