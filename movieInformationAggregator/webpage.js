async function logMovies() {
    const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=452531cd");
    const movies = await response.json();
    console.log(movies);

}
console.log(logMovies())