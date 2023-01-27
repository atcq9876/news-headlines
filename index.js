const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');
const NewsClient = require('./src/newsClient');

const model = new NewsModel();
const client = new NewsClient();
const view = new NewsView(model, client);

view.displayHeadlinesFromAPI();