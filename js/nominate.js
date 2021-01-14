import { addMovie } from './database.js';
//N / A;

export function nominateMovie() {
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
  console.log(localStorage);
}

export const disableNominationBtns = () => {};
export const enableNominationBtns = () => {};
export function wasPrevNominated() {}
