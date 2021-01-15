import { addMovie, removeMovie } from './database.js';
import { refreshNominationResults } from './nominationResults.js';
//N / A;

export function nominateMovie() {
  const searchResults = document.getElementById('searchResults');
  this.disabled = true;
  this.innerHTML = 'Nominated';

  //   let img =
  //     this.getAttribute('data-img') === 'N/A'
  //       ? './resources/poster_placeholder.jpg'
  //       : this.getAttribute('data-img');
  //   //(this.getAttribute("data-img")=== "N/A") ?let img = "./resourses/poster_placeholder.jpg":let img =this.getAttribute("data-img")
  //   let movie = {
  //     Title: this.getAttribute('data-title'),
  //     Year: this.getAttribute('data-year'),
  //     Poster: img,
  //   };
  addMovie(
    this.getAttribute('data-title'),
    this.getAttribute('data-year'),
    this.getAttribute('data-img')
  );
  //searchResults.style.display = 'block';
  refreshNominationResults();

  if (numOfNominations() == 5) {
    disableNominationBtns();
  }

  console.log(localStorage);
}

export function deleteNomination() {
  removeMovie(this.getAttribute('data-title'));
  refreshNominationResults();
  enableNominationBtns();
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

    // button.classList.add
  });
};

export const numOfNominations = () => {
  return JSON.parse(localStorage.getItem('count'));
};

export const isNominated = (movieTitle) => {
  let isNominated = false;
  let data = JSON.parse(localStorage.getItem('movies'));
  let nominatedMovies = data.filter((movie) => {
    return movie.Title !== '';
  });
  for (let i = 0; i < nominatedMovies.length; i++) {
    if (nominatedMovies[i].Title === movieTitle) {
      isNominated = true;
      break;
    }
  }
  return isNominated;
};
