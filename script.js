// MOVIE CARD
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const movieList = document.getElementById('movieList');

    fetch('movies.json')
        .then(response => response.json())
        .then(movies => {
            displayMovies(movies);

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredMovies = movies.filter(movie => {
                    return movie.title.toLowerCase().includes(searchTerm) ||
                           movie.genre.toLowerCase().includes(searchTerm) ||
                           movie.director.toLowerCase().includes(searchTerm);
                });
                displayMovies(filteredMovies);
            });
        });

    function displayMovies(movies) {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <h3>${movie.title}</h3>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
                <p><strong>Rating:</strong> ${movie.rating}</p>
            `;
            movieList.appendChild(movieCard);
        });
    }
});
