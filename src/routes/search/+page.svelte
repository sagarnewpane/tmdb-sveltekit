<script>
    import MovieCard from "../../components/MovieCard.svelte";
    import Pagination from "../../components/Pagination.svelte";

    export let data;
    $:movies = data.movies;
    let currentPage = data.pagination.currentPage;
    let totalPages = data.pagination.totalPages;
</script>

<h3>Showing results for "{data.query}"</h3>
<MovieCard {movies} />
<Pagination {currentPage} {totalPages} />