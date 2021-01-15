// export const appendNominationResults = () => {};
// export const truncateNominationResults = () => {};
import { deleteNomination } from './nominate.js';
export const refreshNominationResults = () => {
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
      // cardOutline.classList.add('createCard');
      // // setTimeout(() => {}, 1000);

      nominationResults.appendChild(cardOutline);
    }
  }
};

// let data = JSON.parse(localStorage.getItem('movies'));
// // let movies = Object.entries(JSON.parse(localStorage.getItem('movies')));

// console.log('length');
// console.log(movies);
// console.log(movies.length);
// console.log(movies[0].Title);
// console.log(movies[1].Title);
// console.log(movies[2].Title);
// //console.log(movies[3].Title);
// ///console.log(movies[2][0].Title);
// //let movies = [];
// // for (var i in nominatedMovies) {
// //   movies.push(nominatedMovies[i]);
// // }

// for (var data in database) {
//   newData.push(database[data]);
// }

const clearNominationResults = () => {
  const nominationResults = document.getElementById('nominationResults');
  while (nominationResults.firstChild) {
    nominationResults.removeChild(nominationResults.firstChild);
  }
};
