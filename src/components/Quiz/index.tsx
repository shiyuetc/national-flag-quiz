import React, { Component } from 'react';
import './Quiz.css';
import { QuestionData } from '../../helpers/QuestionData';
import { Country } from '../../interfaces/Country';
import Question from '../Question';
import SettingForm from '../SettingForm';

interface Props {
  areaGroups: Array<Array<Country>>
}

interface States {
  questionCount: number,
  rightCount: number,
  answerRate: number,
  qd: QuestionData,
  viewSettingForm: boolean,
  questionRange: Array<boolean>
}

class Quiz extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      questionCount: 1,
      rightCount: 0,
      answerRate: 0,
      qd: new QuestionData(this.props.areaGroups.map(x => x.length)),
      viewSettingForm: false,
      questionRange: []
    };
    this.areaChange = this.areaChange.bind(this);
    this.answerResponse = this.answerResponse.bind(this);
  }

  areaChange(selectedArea: Array<boolean>) {
    this.setState({ questionRange: selectedArea })
  }

  answerResponse(result: boolean) {
    this.state.qd.disabled();
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
        <div className="Header">
          <h2 className="Title">国旗当てクイズ</h2>
          <div className="ButtonBlock ToggleButton">
            <button onClick={() => this.setState({ viewSettingForm: !this.state.viewSettingForm })}>設定</button>
          </div>
        </div>
        <div style={{ display: this.state.viewSettingForm ? 'block' : 'none' }}>
          <SettingForm handleChange={this.areaChange} />
        </div>
        <p className="SubText">
          正答数：{this.state.questionCount - 1}問中{this.state.rightCount}問 ({this.state.answerRate}%)
        </p>
        <Question enable={this.state.qd.enable}
          answer={this.state.qd.answer} candidates={[
            this.props.areaGroups[this.state.qd.candidate[0].area][this.state.qd.candidate[0].index],
            this.props.areaGroups[this.state.qd.candidate[1].area][this.state.qd.candidate[1].index],
            this.props.areaGroups[this.state.qd.candidate[2].area][this.state.qd.candidate[2].index],
            this.props.areaGroups[this.state.qd.candidate[3].area][this.state.qd.candidate[3].index]]}
          answerResponse={this.answerResponse} />
        <div className="ButtonBlock NextButton">
          <button onClick={() => this.setState({ qd: new QuestionData(this.props.areaGroups.map(x => x.length), this.state.questionRange) })}>次の問題</button>
        </div>
      </>
    );
  }
}

export default Quiz;