const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  it('returns an empty array when there are no headlines', () => {
    const model = new NewsModel();

    expect(model.getHeadlines()).toEqual([]);
  })

  it('sets headlines', () => {
    const model = new NewsModel();
    headlines = ['One', 'Two', 'Three'];
    model.setHeadlines(headlines)

    expect(model.getHeadlines()).toEqual(['One', 'Two', 'Three']);
  })
})