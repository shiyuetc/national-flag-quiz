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
  wrongCount: number,
  questionData: QuestionData
}

class Quiz extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      questionCount: 1,
      rightCount: 0,
      wrongCount: 0,
      questionData: new QuestionData(this.props.countries.length)
    };
    this.answerResponse = this.answerResponse.bind(this);
  }

  answerResponse(result: boolean) {
    this.state.questionData.disabled()
    if (result) {
      this.setState({ rightCount: this.state.rightCount + 1 })
    } else {
      this.setState({ wrongCount: this.state.wrongCount + 1 })
    }
  }

  next() {
    this.setState({
      questionCount: this.state.questionCount + 1,
      questionData: new QuestionData(this.props.countries.length)
    })
  }

  render() {
    return (
      <div>
        <Question enable={this.state.questionData.enable}
          answer={this.state.questionData.answer} candidates={[
          this.props.countries[this.state.questionData.candidateIndex[0]],
          this.props.countries[this.state.questionData.candidateIndex[1]],
          this.props.countries[this.state.questionData.candidateIndex[2]],
          this.props.countries[this.state.questionData.candidateIndex[3]]]}
          answerResponse={this.answerResponse} />
          <div className="NextButton">
            <button onClick={() => this.next()}>次の問題</button>
          </div>
      </div>
    );
  }
}

export default Quiz;