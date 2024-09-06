/** @type {import('./$types').PageServerLoad} */
import 'dotenv/config';


export async function load({fetch, url}) {
    const apiKey = process.env.API_KEY;
    const currentPage = url.searchParams.get('page') || 1; // Default to page 1 if not specified
    const query = url.searchParams.get('query');
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}&page=${currentPage}`);
    const data = await res.json();
    const { results, total_pages } = data;
    // @ts-ignore
    let movies = [];
    // @ts-ignore
    results.forEach(movie => {
        movies.push({
            title: movie.title,
            overview: movie.overview,
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            id: movie.id,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
        });
    });
    // @ts-ignore
    return { 
        movies,
        pagination: {
            currentPage: parseInt(currentPage, 10),
            totalPages: total_pages
        },
        query
    };
};