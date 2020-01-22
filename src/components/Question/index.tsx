import React, { Component } from 'react';
import './Question.css';
import AnswerButton from '../AnswerButton';
import MessageText from '../MessageText';
import { Country } from '../../interfaces/Country';

interface Props {
  enable: boolean,
  answer: number,
  candidates: Array<Country>,
  answerResponse: Function
}

interface States {
  isRight?: boolean
}

class Question extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = { isRight: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(code: string) {
    if(this.props.enable) {
      var is_right = this.props.candidates[this.props.answer].code === code;
      this.setState({ isRight: is_right });
      this.props.answerResponse(is_right);
    }
  }

  render() {
    return (
      <div className="Question">
        <img src={'images/nf/' + this.props.candidates[this.props.answer].english + '.png'} alt="flag" />
        <MessageText answerText={this.props.candidates[this.props.answer].japanese} isAnswered={!this.props.enable} isRight={this.state.isRight} />
        {this.props.candidates.map((v, index) => (
          <AnswerButton key={index} code={v.code} text={v.japanese} handleClick={this.handleClick} disabled={!this.props.enable} />
        ))}
      </div>
    );
  }
}

export default Question;