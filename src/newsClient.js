const apiKey = require('../apiKey');

class NewsClient {
  loadHeadlines(query, callback, errorCallback) {
    const url = `https://content.guardianapis.com/search?q=${query}&query-fields=headline&show-fields=thumbnail,headline,byline,standfirst&order-by=newest&api-key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        console.log(error);
        errorCallback();
      });
  }
}

module.exports = NewsClient;