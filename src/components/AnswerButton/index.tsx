import React, { Component } from 'react';
import './AnswerButton.css';

interface Props {
  code: string,
  text: string,
  handleClick: Function
}

class AnswerButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.handleClick(this.props.code);
  }
  
  render() {
    return (
      <div className="ButtonBlock AnswerButton">
        <button onClick={this.handleClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default AnswerButton;