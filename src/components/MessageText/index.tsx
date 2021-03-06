import React, { Component } from 'react';
import './MessageText.css';

interface Props {
  answerText: string,
  isAnswered?: boolean,
  isRight?: boolean
}

class MessageText extends Component<Props> {
  render() {
    return (
      <div className="MessageText">
        {(() => {
          if (!this.props.isAnswered) {
            return <p className="Default">Q.この国旗の国名は？</p>
          } else {
            if (this.props.isRight) {
              return <p className="Right">正解！<br />正解は&nbsp;<span>{this.props.answerText}</span>&nbsp;でした。</p>
            } else {
              return <p className="Wrong">不正解！<br />正解は&nbsp;<span>{this.props.answerText}</span>&nbsp;でした。</p>
            }
          }
        })()}
      </div>
    );
  }
}

export default MessageText;