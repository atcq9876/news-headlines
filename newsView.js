class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    this.searchButtonEl = document.querySelector("#search-btn");
    this.searchButtonEl.addEventListener('click', () => {
      this.searchHeadlines(document.querySelector("#search-input").value);
    });
  }

  displayHeadlines() {
    // to do: clear old headlines
    const headlines = this.model.getHeadlines();
    headlines.forEach((headline) => {
      const headlineEl = document.createElement("div");
      headlineEl.className = "headline-div"
      this.mainContainerEl.append(headlineEl);

      const headlineImageEl = document.createElement("img");
      headlineImageEl.setAttribute("src", headline.fields.thumbnail);
      headlineEl.append(headlineImageEl);
      
      const headlineTitleEl = document.createElement("p")
      headlineTitleEl.textContent = headline.webTitle;
      headlineTitleEl.className = "headline-text"
      headlineEl.append(headlineTitleEl);
    })
    // to do: add link to headlineEl div (or its parts) with URL to the official guardian article
  }

  displayHeadlinesFromAPI() {
    // (pass a second callback, displayError(), to be called in .catch part of fetch call)
    this.client.loadHeadlines("", (data) => {
      console.log(data);
      this.model.setHeadlines(data.response.results);
      this.displayHeadlines();
    });
  }

  searchHeadlines(searchInput) {
    this.client.loadHeadlines(searchInput, (data) => {
      console.log(data);
      this.model.setHeadlines(data.response.results);
      this.displayHeadlines();
    });
  }

  displayError() {
    // add a div to the page with an error message
    // (also console.log an error message)
  }
}

module.exports = NewsView;