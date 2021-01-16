export const maxNominationSelected = () => {
  const messageBanner = document.getElementById('messageBanner');
  messageBanner.className = '';
  messageBanner.classList.add('success');
  messageBanner.innerHTML = `<i class="fas fa-check-circle"></i> You have nominated five movies. If you'd like to nominate another movie, please remove one of your previously nominated movies.`;
};

export const nominationRemoved = () => {
  const messageBanner = document.getElementById('messageBanner');

  messageBanner.className = '';
  messageBanner.classList.add('info');
  messageBanner.innerHTML = `<i class="fas fa-info-circle"></i> Nomination was successfully removed.`;
  setTimeout(() => {
    messageBanner.className = '';
    messageBanner.innerHTML = '';
  }, 2000);
};

//handle errors thrown by the API based on user input
export const errorHandling = (error) => {
  const messageBanner = document.getElementById('messageBanner');
  messageBanner.className = '';
  messageBanner.classList.add('error');
  if (error.Error == 'Incorrect IMDb ID.')
    messageBanner.innerHTML = `<i class="fas fa-times-circle"></i> Please search using a movie title.`;
  if (error.Error == 'Movie not found!')
    messageBanner.innerHTML = `<i class="fas fa-times-circle"></i> Movie not found. Please try again with a more specific movie title.`;

  if (error.Error == 'Too many results.')
    messageBanner.innerHTML = `<i class="fas fa-times-circle"></i> There are too many results for this movie title. Please try again with a more specific movie title.`;

  setTimeout(() => {
    messageBanner.className = '';
    messageBanner.innerHTML = '';
  }, 3500);
};

//handles network error if thrown by JS Fetch API
export const networkError = () => {
  const messageBanner = document.getElementById('messageBanner');
  messageBanner.className = '';
  messageBanner.classList.add('error');
  messageBanner.innerHTML = `<i class="fas fa-exclamation-circle"></i> Network error. Please try again`;
  setTimeout(() => {
    messageBanner.className = '';
    messageBanner.innerHTML = '';
  }, 4000);
};
