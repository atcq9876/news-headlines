class NewsModel {
  constructor() {
    this.headlines = [];
  }

  getHeadlines() {
    return this.headlines;
  }

  setHeadlines(headlines) {
    this.headlines = headlines;
  }
}

module.exports = NewsModel;