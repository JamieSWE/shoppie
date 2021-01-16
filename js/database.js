//This file is used to simulate a database connection
//Local storgae is used to persist the nominated movies

export const removeMovie = (movieTitle) => {
  let data = JSON.parse(localStorage.getItem('movies'));
  let newData = data.filter((movie) => {
    return movie.Title !== movieTitle;
  });
  let count = JSON.parse(localStorage.getItem('count'));
  --count;
  localStorage.clear();
  localStorage.setItem('movies', JSON.stringify(newData));
  localStorage.setItem('count', JSON.stringify(count));
};

export const addMovie = (title, year, poster) => {
  //If a movie poster is not provided by the API, a generic placeholder
  //is used as the poster image
  if (poster === 'N/A') poster = './resources/poster_placeholder.jpg';

  if (localStorage.length === 0) {
    let movie = [{ Title: title, Year: year, Poster: poster }];
    let numOfNominations = 1;
    localStorage.setItem('movies', JSON.stringify(movie));
    localStorage.setItem('count', JSON.stringify(numOfNominations));
  } else {
    let data = JSON.parse(localStorage.getItem('movies'));
    let count = JSON.parse(localStorage.getItem('count'));
    let movie = { Title: title, Year: year, Poster: poster };
    let newData = data.filter((movie) => {
      return movie.title !== '';
    });

    newData.push(movie);
    ++count;
    localStorage.clear();
    localStorage.setItem('movies', JSON.stringify(newData));
    localStorage.setItem('count', JSON.stringify(count));
  }
};
