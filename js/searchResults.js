import {
  nominateMovie,
  numOfNominations,
  disableNominationBtns,
  isNominated,
} from './nominate.js';
import { maxNominationSelected, errorHandling } from './message.js';
export const updateSearchResults = (data) => {
  clearSearchResults();

  if (data.Search) {
    const searchResults = document.getElementById('searchResults');
    for (let i = 0; i < data.Search.length; i++) {
      let li = document.createElement('li');
      let button = document.createElement('button');
      let div = document.createElement('div');
      div.innerHTML = `${data.Search[i].Title} <em>(${data.Search[i].Year})</em>`;
      button.setAttribute('data-title', data.Search[i].Title);
      button.setAttribute('data-year', data.Search[i].Year);
      button.setAttribute('data-img', data.Search[i].Poster);
      if (isNominated(data.Search[i].Title)) {
        button.appendChild(document.createTextNode('Nominated'));
        button.classList.add('isNominated');
      } else {
        button.appendChild(document.createTextNode('Nominate'));
        button.classList.add('nominateBtn');
      }

      button.addEventListener('click', nominateMovie);
      div.classList.add('liText');
      li.appendChild(div);
      li.appendChild(button);
      searchResults.appendChild(li);
    }
    if (numOfNominations() == 5) {
      disableNominationBtns();
      maxNominationSelected();
    }

    searchResults.style.display = 'block';
  } else {
    errorHandling(data);
  }
};

export const clearSearchResults = () => {
  const searchResults = document.getElementById('searchResults');
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }
};
