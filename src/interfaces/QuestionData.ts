export class QuestionData {

  answer: number;
  candidateIndex: Array<number> = [4];
  enable: boolean;

  constructor(countryCount: number) {
    this.answer = Math.floor(Math.random() * 4);
    for (var i = 0; i < 4; i++) {
      this.candidateIndex[i] = Math.floor(Math.random() * countryCount);
    }
    this.enable = true;
  }

  public disabled() {
    this.enable = false;
  }
}