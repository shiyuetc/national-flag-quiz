import React, { Component } from 'react';
import './AnswerButton.css';

interface Props {
  code: string,
  text: string,
  handleClick: Function,
  disabled?: boolean
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
      <div className="AnswerButton">
        <button onClick={this.handleClick} disabled={this.props.disabled}>{this.props.text}</button>
      </div>
    );
  }
}

export default AnswerButton;