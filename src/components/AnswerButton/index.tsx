import React, { Component } from 'react';

interface Props {
  code: string,
  buttonText: string,
  outerText: string,
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
        <button onClick={this.handleClick} disabled={this.props.disabled}>{this.props.buttonText}</button>&nbsp;{this.props.outerText}
      </div>
    );
  }
}

export default AnswerButton;