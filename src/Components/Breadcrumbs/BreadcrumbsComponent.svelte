<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
    import {page} from "$app/stores";

    $: bread_crumbs = $page.url.pathname.replace('/', '').split('/')

    const urlParent = index => {
        var fullPath = ''
        for (let i = 0; i <= index; i++) {
            console.log(bread_crumbs[i])
            fullPath = fullPath + '/' +  bread_crumbs[i]
        }
        return fullPath
    }
</script>

<div class="flex space-x-3">
    <a href="/dashboard">
        dashboard
    </a>
    {#if $page.url.pathname != '/dashboard'}
        {#each bread_crumbs as item, i}
            <div>
                <Fa icon={faChevronRight} class="w-10 inline" />
            </div>
            {#if !bread_crumbs[i + 1]}
                <div>
                    {item}
                </div>
            {:else}
                {#if !bread_crumbs[i - 1]}
                    <div>
                        {item}
                    </div>
                {:else}
                    <a href="{urlParent(i)}">
                        {item}
                    </a>
                {/if}
            {/if}
        {/each}
    {/if}
</div>