import { submitSearch } from './search.js';

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchResults = document.getElementById('searchResults');

//initialized methods, place in a function
clearSearchBtn.style.display = 'none';
searchResults.style.display = 'none';

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') submitSearch();
});
search.addEventListener('focusin', () => {
  if (search.value.trim() === '') {
    clearSearchBtn.style.display = 'none';
  } else {
    clearSearchBtn.style.display = 'block';
  }

  if (searchResults.getElementsByTagName('li').length >= 1) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
});
search.addEventListener('focusout', () => {
  clearSearchBtn.style.display = 'none';
  searchResults.style.display = 'none';
});
search.addEventListener('input', () => {
  if (search.value.trim() === '') {
    clearSearchBtn.style.display = 'none';
  } else {
    clearSearchBtn.style.display = 'block';
  }
});

searchBtn.addEventListener('click', submitSearch);

// searchBar.addEventListener('focusin', () => {
//     if (searchBar.value.trim() === '') {
//       results.style.display = 'none';
//     } else {
//       results.style.display = 'block';
//     }

// searchBar.addEventListener('focusout', () => {
//     results.style.display = 'none';
//   });
