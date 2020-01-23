import React, { Component } from 'react';
import './Quiz.css';
import { Country } from '../../interfaces/Country';
import { QuestionData } from '../../interfaces/QuestionData';
import Question from '../Question';

interface Props {
  countries: Array<Country>
}

interface States {
  questionCount: number,
  rightCount: number,
  answerRate: number,
  questionData: QuestionData
}

class Quiz extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      questionCount: 1,
      rightCount: 0,
      answerRate: 0,
      questionData: new QuestionData(this.props.countries.length)
    };
    this.answerResponse = this.answerResponse.bind(this);
  }

  answerResponse(result: boolean) {
    this.state.questionData.disabled();
    if (result) {
      this.setState({ 
        questionCount: this.state.questionCount + 1,
        rightCount: this.state.rightCount + 1,
        answerRate: Math.floor((this.state.rightCount + 1) / this.state.questionCount * 100)
      });
    } else {
      this.setState({ 
        questionCount: this.state.questionCount + 1,
        answerRate: Math.floor(this.state.rightCount / this.state.questionCount * 100)
      });
    }
  }

  render() {
    return (
      <>
        <div className="StatusText">
          正答数：{this.state.questionCount - 1}問中{this.state.rightCount}問 ({this.state.answerRate}%)
        </div>
        <Question enable={this.state.questionData.enable}
          answer={this.state.questionData.answer} candidates={[
            this.props.countries[this.state.questionData.candidateIndex[0]],
            this.props.countries[this.state.questionData.candidateIndex[1]],
            this.props.countries[this.state.questionData.candidateIndex[2]],
            this.props.countries[this.state.questionData.candidateIndex[3]]]}
          answerResponse={this.answerResponse} />
        <div className="NextButton">
          <button onClick={() => this.setState({ questionData: new QuestionData(this.props.countries.length) })}>次の問題</button>
        </div>
      </>
    );
  }
}

export default Quiz;