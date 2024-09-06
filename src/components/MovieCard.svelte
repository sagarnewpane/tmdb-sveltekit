<script>
export let movies;
</script>
<div class="movies">
{#each movies as movie}
        <div class="card">
            <a href="/movies/{movie.id}">
                <img src={movie.image} alt="">
                <div class="info">
                    <div class="rating">
                        <p>Rating: {movie.vote_average} from {movie.vote_count} votes.</p>
                    </div>
                    
                    <h3>{movie.title}</h3>
                    <p class="desc">{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    
                </div>
            </a>
        </div>
{/each}
</div>

<style>
    .movies {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .card {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        max-width: 15%;
    }

    .card a {
        text-decoration: none;
        color: black;
    }
    
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 5px;
    }

    .info {
       
    }

    .info .desc{
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines to show */
    -webkit-box-orient: vertical;
}
</style>