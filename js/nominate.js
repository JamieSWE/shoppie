import { addMovie, removeMovie } from './database.js';
import { refreshNominationResults } from './nominationResults.js';
import { maxNominationSelected, nominationRemoved } from './message.js';

export function nominateMovie() {
  const messageBanner = document.getElementById('messageBanner');
  this.disabled = true;
  this.innerHTML = 'Nominated';
  addMovie(
    this.getAttribute('data-title'),
    this.getAttribute('data-year'),
    this.getAttribute('data-img')
  );

  refreshNominationResults('yes');

  if (numOfNominations() == 5) {
    disableNominationBtns();
    maxNominationSelected();
  }
}

export function deleteNomination() {
  removeMovie(this.getAttribute('data-title'));
  refreshNominationResults();
  enableNominationBtns();
  nominationRemoved();
}
export const disableNominationBtns = () => {
  let btns = document.querySelectorAll('#searchResults button');
  btns.forEach((button) => {
    button.disabled = true;
  });
};

export const enableNominationBtns = () => {
  let btns = document.querySelectorAll('#searchResults button');
  btns.forEach((button) => {
    if (!isNominated(button.getAttribute('data-title'))) {
      button.removeChild(button.firstChild);
      button.appendChild(document.createTextNode('Nominate'));
      button.classList.add('nominateBtn');
      button.disabled = false;
    }
  });
};

export const numOfNominations = () => {
  return JSON.parse(localStorage.getItem('count'));
};

export const isNominated = (movieTitle) => {
  let isNominated = false;
  let data = JSON.parse(localStorage.getItem('movies'));
  if (localStorage.length !== 0) {
    let nominatedMovies = data.filter((movie) => {
      return movie.Title !== '';
    });
    for (let i = 0; i < nominatedMovies.length; i++) {
      if (nominatedMovies[i].Title === movieTitle) {
        isNominated = true;
        break;
      }
    }
  }
  return isNominated;
};
