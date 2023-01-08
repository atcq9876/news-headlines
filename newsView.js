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
    this.#clearHeadlines();

    const headlines = this.model.getHeadlines();
    headlines.forEach((headline) => {
      this.#createHeadlineElement(headline);
    })
  }

  displayHeadlinesFromAPI() {
    this.client.loadHeadlines("", (data) => {
      console.log(data);
      this.model.setHeadlines(data.response.results);
      this.displayHeadlines();
    }, () => {
      this.#displayError();
    });
  }

  searchHeadlines(searchInput) {
    this.client.loadHeadlines(searchInput, (data) => {
      console.log(data);
      this.model.setHeadlines(data.response.results);
      this.displayHeadlines();
    }, () => {
      this.#displayError();
    });
  }

  // Private functions

  #clearHeadlines() {
    const headlines = document.querySelectorAll(".headline-div")
    headlines.forEach((headline) => {
      headline.remove();
    })
  }

  #displayError() {
    const errorEl = document.createElement("div");
    errorEl.className = "error"
    errorEl.textContent = "Oops! There was an error."
    this.mainContainerEl.append(errorEl);
  }

  #createHeadlineElement(headline) {
    const headlineEl = document.createElement("div");
    headlineEl.className = "headline-div"
    this.mainContainerEl.append(headlineEl);

    const headlineImageEl = document.createElement("img");
    headlineImageEl.setAttribute("src", headline.fields.thumbnail);
    headlineEl.append(headlineImageEl);
    
    const headlineTitleEl = document.createElement("p")
    headlineEl.append(headlineTitleEl);

    const headlineTitleLinkEl = document.createElement("a")
    headlineTitleLinkEl.textContent = headline.webTitle;
    headlineTitleLinkEl.className = "headline-text"
    headlineTitleLinkEl.setAttribute("href", headline.webUrl);
    headlineTitleEl.append(headlineTitleLinkEl);
  }
}

module.exports = NewsView;