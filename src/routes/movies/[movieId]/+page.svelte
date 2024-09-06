<script>
    export let data;
    const movie = data.movie;
</script>

<h1>{movie.title}</h1>
<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="">
<p>{movie.overview}</p>
<p>Release Date: {movie.release_date}</p>
<p>Rating: {movie.vote_average}</p>
<p>Vote Count: {movie.vote_count}</p>
<p>Popularity: {movie.popularity}</p>
<p>Original Language: {movie.original_language}</p>
<p>Original Title: {movie.original_title}</p>
<p>Adult: {movie.adult ? 'Yes' : 'No'}</p>
<p>Video: {movie.video ? 'Yes' : 'No'}</p>
<p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
<p>Production Companies: {movie.production_companies.map(company => company.name).join(', ')}</p>
<p>Production Countries: {movie.production_countries.map(country => country.name).join(', ')}</p>
<p>Spoken Languages: {movie.spoken_languages.map(language => language.name).join(', ')}</p>
<p>Runtime: {movie.runtime} minutes</p>
<p>Budget: ${movie.budget}</p>
<p>Revenue: ${movie.revenue}</p>
<p>Status: {movie.status}</p>
<p>Tagline: {movie.tagline}</p>