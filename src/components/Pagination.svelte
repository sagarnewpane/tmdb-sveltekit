<script>
    import { page } from '$app/stores';

    export let currentPage;
    export let totalPages;
    export let maxVisiblePages = 5; // Number of pages to show around the current page

    let currentPath;

    // Reactive statement to get the current path
    $: currentPath = $page.url.pathname;
    $: query =$page.url.searchParams.get('query') || '';

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            window.location.href = `${currentPath}?query=${query}&page=${page}`;
        }
    };

    let startPage, endPage;

    $: {
        const half = Math.floor(maxVisiblePages / 2);
        startPage = Math.max(1, currentPage - half);
        endPage = Math.min(totalPages, currentPage + half);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (endPage - startPage + 1 < maxVisiblePages) {
            endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        }
    }
</script>

<nav>
    <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
    </button>
    {#if startPage > 1}
        <button on:click={() => goToPage(1)}>1</button>
        {#if startPage > 2}
            <span>...</span>
        {/if}
    {/if}
    {#each Array(endPage - startPage + 1).fill(0).map((_, i) => startPage + i) as page}
        <button on:click={() => goToPage(page)} class:active={page === currentPage}>
            {page}
        </button>
    {/each}
    {#if endPage < totalPages}
        {#if endPage < totalPages - 1}
            <span>...</span>
        {/if}
        <button on:click={() => goToPage(totalPages)}>{totalPages}</button>
    {/if}
    <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
    </button>
</nav>

<style>
    nav {
        display: flex;
        gap: 0.5rem;
    }
    button {
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .active {
        font-weight: bold;
        text-decoration: underline;
    }
    span {
        padding: 0.5rem 1rem;
    }
</style>