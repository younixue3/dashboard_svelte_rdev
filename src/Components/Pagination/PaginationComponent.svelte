<script lang="ts">
    import {getContext} from "svelte";
    export let totalPage: number;
    export let indexPage: number;

    const {changePage, pagePrevNext} = getContext('counter')


</script>

<div class="rounded-lg p-2 flex justify-end gap-5 font-bold">
    <button on:click={pagePrevNext(indexPage - 1)} class="bg-clear rounded hover:bg-gray-200 px-2 w-20">Previous</button>
    <div class="flex justify-center gap-2">
        {#each {length: totalPage} as _, i}
            <button on:click={() => changePage(i+1)} class:hidden={indexPage - 2 - (indexPage == totalPage - 1 ? 1 : 0) - (indexPage == totalPage ? 2 : 0) > i + 1 || indexPage + 2 + (indexPage === 2 ? 1 : 0) + (indexPage === 1 ? 2 : 0)  < i + 1} class={"w-6 h-6 inline-block rounded text-center text-sm " + (i + 1 === indexPage ? 'bg-primary' : 'bg-clear') }><span class="align-sub">{i+1}</span></button>
        {/each}
    </div>
    <button on:click={pagePrevNext(indexPage + 1)} class="bg-clear rounded hover:bg-gray-200 px-2 w-20">Next</button>
</div>