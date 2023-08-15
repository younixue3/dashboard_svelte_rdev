<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import '@fortawesome/free-solid-svg-icons';
    import * as FaIcons from '@fortawesome/free-solid-svg-icons';

    export let dropdown: boolean;
    export let color: any;
    export let text: string;
    export let icon: string;

    let icons: any = FaIcons;

    let toggle: boolean;
    let container;

    function ToogleDropdown() {
        toggle = toggle == false;
    }
    function ClickAnywhere(e) {
        if (container.contains(e.target) == false)
            toggle = false;
    }
</script>

<div class="flex relative" bind:this={container}>
    <button on:click={ToogleDropdown} class={'rounded-md pt-1 pb-0.5 px-2 m-auto ' + color}>
        {#if icon}
            <Fa icon={icons[icon]} class="inline"/>
        {/if}
        {#if text}
            {text}
        {/if}
    </button>
    {#if (dropdown)}
        <div id="dropdown" class:max-h-[40rem]={toggle} class:max-h-0={!toggle} class:p-2={toggle} class:border={toggle} class="absolute overflow-hidden bg-white left-10 top-5 shadow-md rounded-lg transition-all ease-in-out duration-200">
            <div class="flex flex-col gap-1">
                <slot></slot>
            </div>
        </div>
    {/if}
</div>

<svelte:window on:click={ClickAnywhere} />
