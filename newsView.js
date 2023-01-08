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

  }

  displayHeadlinesFromAPI() {
    
  }

  searchHeadlines(searchInput) {

  }

  displayError() {

  }
}

module.exports = NewsView;