//This file is used to simulate a database connection
//Local storgae is used to persist the nominated movies

export const removeMovie = (movieTitle) => {
  let data = localStorage.getItem('movies');
  data = JSON.parse(data);
  let newData = data.filter((movie) => {
    return movie.Title !== movieTitle;
  });
  localStorage.clear();
  localStorage.setItem('movies', JSON.stringify(newData));
};

export const addMovie = (title, year, poster) => {
  if (poster === 'N/A') poster = './resources/poster_placeholder.jpg';
  if (localStorage.length === 0) {
    let movie = [{ Title: title, Year: year, Poster: poster }];
    localStorage.setItem('movies', JSON.stringify(movie));
  } else {
    let data = localStorage.getItem('movies');
    data = JSON.parse(data);
    let movie = [{ Title: title, Year: year, Poster: poster }];
    let newData = data.filter((movie) => {
      return movie.title !== '';
    });

    newData.push(movie);
    localStorage.clear();
    localStorage.setItem('movies', JSON.stringify(newData));
  }

  // if (localStorage.length === 0) {
  //   let newData = [];
  //   newData.push(movie);
  //   localStorage.setItem('movies', JSON.stringify(movie));
  // } else {
  //   let database = localStorage.getItem('movies');
  //   database = JSON.parse(database);
  //   let newData = [];
  //   for (var data in database) {
  //     newData.push(database[data]);
  //   }
  //   //newData = database;
  //   newData.push(movie);
  //   localStorage.clear();
  //   localStorage.setItem('movies', JSON.stringify(newData));
  // }
};
// function myGFG() {
//   var obj = JSON.parse(JS_Obj);
//   var res = [];

//   for (var i in obj) res.push(obj[i]);

//   down.innerHTML = 'Array of values - [' + res + ']';
// }

// let movie = [
//   { title: 'movie1', genre: 'action' },
//   { title: 'movie2', genre: 'comedy' },
//   { title: 'movie3', genre: 'drama' },
// ];
// console.log('initial');
// localStorage.setItem('movies', JSON.stringify(movie));
// let get = localStorage.getItem('movies');
// console.log(JSON.parse(get));
// console.log(get.length);
// console.log('update');
// get = JSON.parse(get);
// let get2 = get.filter((movie) => {
//   return movie.title !== 'movie2';
// });
// localStorage.clear();
// let m = { title: 'movie4', genre: '' };
// get2.push(m);
// localStorage.setItem('movies', JSON.stringify(get2));
// let finalGet = localStorage.getItem('movies');
// console.log(JSON.parse(finalGet));
// console.log(get.length);
