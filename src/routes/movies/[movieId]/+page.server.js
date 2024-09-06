/** @type {import('./$types').PageServerLoad} */
export async function load({fetch,params}) {
    const movieId = params.movieId;
    const apiKey = process.env.API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const data = await res.json();
    return {movie: data};
};