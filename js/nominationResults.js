import { deleteNomination } from './nominate.js';

export const refreshNominationResults = (newNomination) => {
  if (localStorage.length >= 1) {
    clearNominationResults();
    let data = JSON.parse(localStorage.getItem('movies'));
    let movies = data.filter((movie) => {
      return movie.Title !== '';
    });
    const nominationResults = document.getElementById('nominationResults');
    for (let i = 0; i < movies.length; i++) {
      let cardOutline = document.createElement('div');
      cardOutline.classList.add('card');
      let button = document.createElement('button');
      button.innerHTML = `<i class="fas fa-trash-alt"></i> Remove`;
      button.setAttribute('data-title', movies[i].Title);
      button.addEventListener('click', deleteNomination);
      let img = document.createElement('img');
      img.src = movies[i].Poster;
      let movieTitle = document.createElement('p');
      movieTitle.appendChild(document.createTextNode(movies[i].Title));
      let releaseYear = document.createElement('p');
      releaseYear.appendChild(document.createTextNode(movies[i].Year));

      cardOutline.appendChild(button);
      cardOutline.appendChild(img);
      cardOutline.appendChild(movieTitle);
      cardOutline.appendChild(releaseYear);
      if (newNomination === 'yes' && i === movies.length - 1)
        cardOutline.classList.add('createCard');

      nominationResults.appendChild(cardOutline);
    }
  }
};

const clearNominationResults = () => {
  const nominationResults = document.getElementById('nominationResults');
  while (nominationResults.firstChild) {
    nominationResults.removeChild(nominationResults.firstChild);
  }
};
