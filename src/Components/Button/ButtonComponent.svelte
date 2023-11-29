<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import '@fortawesome/free-solid-svg-icons';
    import * as FaIcons from '@fortawesome/free-solid-svg-icons';

    export let dropdown = false;
    export let color: any;
    export let text: string;
    export let icon: string;
    export let form: string;
    export let type = 'button';

    let icons: any = FaIcons;

    let toggle = false;
    let container;

    let dropdowner: any

    let className = '';
    export { className as class};

    function ToogleDropdown() {
        toggle = toggle == false;
    }
    function ClickAnywhere(e) {
        if (container.contains(e.target) == false)
            toggle = false;
    }
</script>

<div class="flex relative" bind:this={container}>
    <button form={form} type={type} on:click={ToogleDropdown} class={'rounded-md pt-1 pb-0.5 m-auto ' + color + ' ' + (text ? 'px-2' : ' ') + ' ' + className}>
        {#if icon}
            <Fa icon={icons[icon]} class="inline "/>
        {/if}
        {#if text}
            {text}
        {/if}
    </button>
    {#if (dropdown)}
        <div id="dropdown" bind:this={dropdowner} class:max-h-[40rem]={toggle} class:max-h-0={!toggle} class:border={toggle} class:max-w-0={!toggle} class="absolute overflow-hidden bg-white -right-10 top-5 shadow-md rounded-lg transition-all ease-in-out duration-400 z-50">
            <div class="flex flex-col gap-1 p-1 text-sm">
                <slot></slot>
            </div>
        </div>
    {/if}
</div>

<svelte:window on:click={ClickAnywhere} />
