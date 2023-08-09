<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';
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


<div class="flex space-x-3 rounded-xl p-2">
    <a class="px-1 hover:bg-gray-300 rounded-lg transition ease-in-out" href="/dashboard">
        <Fa icon={faHome} class="inline" />
    </a>
    {#if $page.url.pathname !== '/dashboard'}
        {#each bread_crumbs as item, i}
            <div>
                <Fa icon={faChevronRight} class="w-10 inline" />
            </div>
            {#if !bread_crumbs[i + 1]}
                <div class="font-bold">
                    {item}
                </div>
            {:else}
                {#if !bread_crumbs[i - 1]}
                    <div>
                        {item}
                    </div>
                {:else}
                    <a class="text-blue-500 px-3 hover:bg-gray-300 rounded-lg transition ease-in-out" href="{urlParent(i)}">
                        {item}
                    </a>
                {/if}
            {/if}
        {/each}
    {/if}
</div>