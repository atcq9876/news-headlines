class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    this.searchInput = document.querySelector("#search-input").value;
    this.searchButtonEl = document.querySelector("#search-btn");
    this.searchButtonEl.addEventListener('click', () => {
      this.searchHeadlines(searchInput);
    });
  }

  displayHeadlines() {
    // clear old headlines
    // call getHeadlines on model
    // loop through headlines and create divs with an image and text
      // headline (which links to the official guardian article), appending each
      // div to the page
    
  }

  displayHeadlinesFromAPI() {
    // call loadAllHeadlines on client, passing it a callback that:
      // calls setHeadlines on model
      // calls displayHeadlines on this
    // (pass a second callback, displayError(), to be called in .catch part of fetch call)
  }

  searchHeadlines(searchInput) {

  }

  displayError() {
    // add a div to the page with an error message
    // (also console.log an error message)
  }
}

module.exports = NewsView;