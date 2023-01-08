/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { isReadable } = require('stream');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');

// create jest automatic mocks of the model and client classes
jest.mock('./newsModel');
jest.mock('./newsClient');

describe('NewsView', () => {
  
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // clear mocks before each test
    NewsModel.mockClear();
    NewsClient.mockClear();
  });

  it('calls loadAllHeadlines via displayHeadlinesFromAPI', () => {
    const model = new NewsModel();
    const client = new NewsClient();
    const view = new NewsView(model, client);
    
    view.displayHeadlinesFromAPI();

    expect(client.loadAllHeadlines).toHaveBeenCalledTimes(1);    
  })
});