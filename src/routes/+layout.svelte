<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    let query = '';
    let currentPath = '';

    $: currentPath = $page.url.pathname;

    const handleSearch = () => {
        if (query.trim()) {
            goto(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
</script>

<nav>
    <ul>
        <li><a href="/" class={currentPath === '/' ? 'active' : ''}>Home</a></li>
        <li><a href="/about" class={currentPath === '/about' ? 'active' : ''}>About</a></li>
        <li><a href="/movies" class={currentPath === '/movies' ? 'active' : ''}>Movies</a></li>
        <li><a href="/trending" class={currentPath === '/trending' ? 'active' : ''}>Trending</a></li>
        <li>
            <input 
                type="text" 
                placeholder="Search..." 
                on:keypress={handleKeyPress}
                bind:value={query} 
            >
        </li>
        <button on:click={handleSearch}>Search</button>

    </ul>
</nav>
<slot></slot>
<footer>
    <p>&copy; 2021</p>
    <p>Powered by SvelteKit@Sagar</p>
</footer>

<style>
    nav {
        background-color: black;
        padding: 8px;
    }
    nav ul {
        text-decoration: none;
        display: flex;
        list-style: none;
        margin: 0;
    }
    nav ul li a {
        color: white;
        padding: 8px;
        text-decoration: none;
    }
    nav ul li a.active {
        background-color: white;
        color: black;
    }
    /* for search bar */
    input {
    }
    button {
        cursor: pointer;
    }
</style>