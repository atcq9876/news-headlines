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

  it('calls loadHeadlines (on client) via displayHeadlinesFromAPI function', () => {
    const mockModel = new NewsModel();
    const mockClient = new NewsClient();
    const view = new NewsView(mockModel, mockClient);
    
    view.displayHeadlinesFromAPI();

    expect(mockClient.loadHeadlines).toHaveBeenCalledTimes(1);    
  })

  it('calls loadHeadlines (on client) via searchHeadlines function', () => {
    const mockModel = new NewsModel();
    const mockClient = new NewsClient();
    const view = new NewsView(mockModel, mockClient);
    
    view.searchHeadlines("Test");

    expect(mockClient.loadHeadlines).toHaveBeenCalledTimes(1);
  })

  it('calls loadHeadlines (on client) via searchHeadlines function when search button clicked', () => {
    const mockModel = new NewsModel();
    const mockClient = new NewsClient();
    const view = new NewsView(mockModel, mockClient);

    const inputEl = document.querySelector("#search-input");
    inputEl.value = "Test";

    const buttonEl = document.querySelector("#search-btn");
    buttonEl.click();

    expect(mockClient.loadHeadlines).toHaveBeenCalledTimes(1);
  })
});