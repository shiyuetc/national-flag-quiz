export class QuestionData {

  answer: number;
  candidateIndex: Array<number> = [4];
  enable: boolean;

  constructor(countryCount: number) {
    this.answer = Math.floor(Math.random() * 4);
    for (var i = 0; i < 4; i++) {
      var rand = Math.floor(Math.random() * countryCount);
      if(!this.candidateIndex.includes(rand)) {
        this.candidateIndex[i] = rand;
      } else {
        i--;
      }
    }
    this.enable = true;
  }

  public disabled() {
    this.enable = false;
  }
}