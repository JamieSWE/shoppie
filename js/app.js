import { submitSearch } from './search.js';
import { refreshNominationResults } from './nominationResults.js';
import { clearSearchResults } from './searchResults.js';
import { numOfNominations } from './nominate.js';
import { maxNominationSelected } from './message.js';

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchResults = document.getElementById('searchResults');
const nominationBtns = document.querySelectorAll('#searchResults button');

clearSearchBtn.style.display = 'none';
searchResults.style.display = 'none';
if (numOfNominations() === 5) {
  maxNominationSelected();
}

refreshNominationResults();

searchBtn.addEventListener('click', submitSearch);
search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') submitSearch();
});

search.addEventListener('input', () => {
  if (search.value.trim() === '') {
    clearSearchBtn.style.display = 'none';
  } else {
    clearSearchBtn.style.display = 'block';
  }
});

clearSearchBtn.addEventListener('click', () => {
  search.value = '';
  search.focus();
  clearSearchResults();
});

document.onclick = (e) => {
  if (e.target.id !== 'searchArea' || e.target.id !== 'resultsArea') {
    searchResults.style.display = 'none';
    clearSearchBtn.style.display = 'none';
  }

  if (e.target.classList.contains('nominateBtn')) {
    searchResults.style.display = 'block';
    clearSearchBtn.style.display = 'block';
  }

  if (e.target.id === 'search') {
    if (searchResults.getElementsByTagName('li').length >= 1) {
      searchResults.style.display = 'block';
    }
    if (search.value.trim() !== '') {
      clearSearchBtn.style.display = 'block';
    }
  }
};
