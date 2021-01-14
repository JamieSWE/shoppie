import { submitSearch } from './search.js';
import { refreshNominationResults } from './nominationResults.js';
import { clearSearchResults } from './searchResults.js';

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchResults = document.getElementById('searchResults');
const nominationBtns = document.querySelectorAll('#searchResults button');

//initialized methods, place in a function
clearSearchBtn.style.display = 'none';
searchResults.style.display = 'none';
// searchResults.classList.toggle('display');
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
// search.addEventListener('focusin', () => {
//   if (search.value.trim() === '') {
//     clearSearchBtn.style.display = 'none';
//   } else {
//     clearSearchBtn.style.display = 'block';
//   }

//   if (searchResults.getElementsByTagName('li').length >= 1) {
//     searchResults.style.display = 'block';
//   } else {
//     searchResults.style.display = 'none';
//   }
// });
// searchResults.addEventListener('focusin', () => {
//   clearSearchBtn.style.display = 'block';
//   searchResults.style.display = 'block';
// });
// nominationBtns.forEach((button) => {
//   button.addEventListener(
//     'click',
//     function () {
//       clearSearchBtn.style.display = 'block';
//       searchResults.style.display = 'block';
//     },
//     false
//   );
// });
// searchResults.addEventListener('focusout', () => {
//   clearSearchBtn.style.display = 'none';
//   searchResults.style.display = 'none';
//   // searchResults.classList.toggle('display');
// });

// searchResults.addEventListener('focusin', () => {
//   searchResults.style.display = 'block';
// });
document.onclick = (e) => {
  if (e.target.id !== 'searchArea' || e.target.id !== 'resultsArea') {
    if (e.target.classList.contains('nominateBtn')) {
      searchResults.style.display = 'block';
      clearSearchBtn.style.display = 'block';
    } else {
      searchResults.style.display = 'none';
      clearSearchBtn.style.display = 'none';
    }
  }
  // if (e.target.querySelector('.nominateBtn')) {
  //   searchResults.style.display = 'block';
  //   clearSearchBtn.style.display = 'block';
  // }
  if (e.target.id === 'search') {
    if (searchResults.getElementsByTagName('li').length >= 1) {
      searchResults.style.display = 'block';
    }
    if (search.value.trim() !== '') {
      clearSearchBtn.style.display = 'block';
    }
  }
};

// searchBar.addEventListener('focusin', () => {
//     if (searchBar.value.trim() === '') {
//       results.style.display = 'none';
//     } else {
//       results.style.display = 'block';
//     }

// searchBar.addEventListener('focusout', () => {
//     results.style.display = 'none';
//   });
