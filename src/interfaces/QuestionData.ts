export class QuestionData {

  answer: number;
  candidate: Array<{ area: number; index: number }> = [];
  enable: boolean;

  constructor(areaGroupCount: Array<number>, questionRange: Array<boolean> = []) {

    // 累計の国の数をカウント
    var countryCount = 0;
    areaGroupCount.forEach(function (count) {
      countryCount += count;
    });

    // 対象の国の数をカウント(未定義の場合は全て)
    var targetCountryCount = 0;
    if (questionRange.length > 0) {
      for (var i = 0; i < areaGroupCount.length; i++) {
        if (questionRange[i]) {
          targetCountryCount += areaGroupCount[i];
        }
      }
    } else {
      targetCountryCount = countryCount;
      areaGroupCount.forEach(function () {
        questionRange.push(true);
      });
    }

    // 正解の番号を確定
    this.answer = Math.floor(Math.random() * 4);
    // 解答を選出
    for (var i = 0; i < 4; i++) {
      if (this.answer !== i) {
        var rand = Math.floor(Math.random() * countryCount);
        for (var j = 0; j < areaGroupCount.length; j++) {
          if (areaGroupCount[j] > rand) {
            this.candidate[i] = { area: j, index: rand };
            break;
          }
          rand -= areaGroupCount[j];
        }
      } else {
        var rand = Math.floor(Math.random() * targetCountryCount);
        for (var j = 0; j < areaGroupCount.length; j++) {
          if (questionRange[j]) {
            if (areaGroupCount[j] > rand) {
              this.candidate[i] = { area: j, index: rand };
              break;
            }
            rand -= areaGroupCount[j];
          }
        }
      }
      // 重複解答の場合は再選出
      if (this.candidate.includes({ area: this.candidate[i].area, index: this.candidate[i].index })) {
        i--;
      }
    }
    
    this.enable = true;
  }

  public disabled() {
    this.enable = false;
  }
}