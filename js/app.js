import { submitSearch } from './search.js';

const search = document.getElementById('search');

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') submitSearch();
});
