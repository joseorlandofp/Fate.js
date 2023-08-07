class Fate {
  constructor(options) {
    this._options = options;
    this._drawn = null;
  }

  getOddsSum(){
    let sum = 0;
    this._options.map((option) => {
      sum += option.odds;
    });
    return sum;
  }

  oddsSumIsValid() {
    return this.getOddsSum() === 100;
  }

  pickANumberOut() {
    let rand = Math.floor(Math.random() * 100);
    this._drawn = rand === 0 ? 1 : rand;
  }

  setOptionsInterval() {
    let sum = 0;
    this._options.map((option) => {
      let start = sum;
      sum += option.odds;
      option.interval = {
        start: start + 1,
        end: start + option.odds,
      };
    });
  }
 
  pick(complete = false) {
    if (!this.oddsSumIsValid()) {
      throw (
        "THE SUM OF ALL ODDS MUST MATCH 100. CURRENT SUM: " +
        this.getOddsSum()
      );
    }
    this.setOptionsInterval();
    this.pickANumberOut();
  
    const selected = this._options.filter((option) => {
      return (
        this._drawn >= option.interval.start && this._drawn <= option.interval.end
      );
    });

    if(selected.length === 0){
      return null;
    }


    return complete ? selected.shift() : (selected.shift().option ? selected.shift().option : null);
  }

  drawn(){
    return this._drawn;
  }
}
