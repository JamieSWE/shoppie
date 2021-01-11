import { API_KEY, WEB_URI, API_FILTER } from './api.js';
import { updateSearchResults } from './searchResults.js';

export const submitSearch = async () => {
  const url = WEB_URI + API_KEY + '&s=' + sanitizeSearchInput() + API_FILTER;
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    updateSearchResults(data);
  } catch (error) {}
};

//used to remove unnecesary whitespaces between words that'll break the API
function sanitizeSearchInput() {
  const searchInput = document.getElementById('search').value.trim();
  //regex used to find 2 or more whitespaces between words
  const regex = /[ ]{2,}/gi;
  const sanitizedSearchInput = searchInput.replaceAll(regex, ' ');
  return sanitizedSearchInput;
}
