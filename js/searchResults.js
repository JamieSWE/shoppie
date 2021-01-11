export const updateSearchResults = (data) => {
  clearSearchResults();
  if (data.Search) {
    const searchResults = document.getElementById('searchResults');
    for (let i = 0; i < data.Search.length; i++) {
      let li = document.createElement('li');
      let button = document.createElement('button');
      let linebreak = document.createElement('br');
      let div = document.createElement('div');
      div.innerHTML = `${data.Search[i].Title}, ${data.Search[i].Year}`;
      //li.innerHTML = `${data.Search[i].Title}, ${data.Search[i].Year}`;
      button.appendChild(document.createTextNode('Nominate'));
      button.setAttribute(
        'data-title',
        data.Search[i].Title,
        'data-year',
        data.Search[i].Year,
        'data-img',
        data.Search[i].Poster
      );
      button.classList.add('nominateBtn');
      //create func in nominate.js
      //button.addEventListener('click', nominateMovie);
      // li.appendChild(linebreak);
      div.classList.add('liText');
      li.appendChild(div);
      li.appendChild(button);
      searchResults.appendChild(li);
    }
  }
};

export const clearSearchResults = () => {
  const searchResults = document.getElementById('searchResults');
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }
};
