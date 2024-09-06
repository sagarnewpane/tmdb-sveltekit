<script>
    import MovieCard from "../../components/MovieCard.svelte";
    import Pagination from "../../components/Pagination.svelte";

    export let data;
    let movies = data.movies;
    let currentPage = data.pagination.currentPage;
    let totalPages = data.pagination.totalPages;
</script>

<MovieCard {movies} />
<Pagination {currentPage} {totalPages} />