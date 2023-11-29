<script lang="ts">

import ButtonComponent from "../Button/ButtonComponent.svelte";
import CardComponents from "../Card/CardComponents.svelte";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";

export let color: string;
export let text: string;
export let icon: string;
export let toggle = true;

let icons: any = FaIcons;


function ToggleModal() {
    console.log('masuk')
    toggle = toggle == false;
}

</script>

<div class="">
    <div on:click={ToggleModal}>
        <ButtonComponent text="Add" icon={icon} color={color}></ButtonComponent>
    </div>
    <div class:hidden={toggle} class="absolute flex right-0 top-0 w-screen h-screen bg-black/50 z-50 backdrop-blur-sm overflow-hidden">
        {#if $$slots.footer}
            <CardComponents class="m-auto bg-white col-span-8" title={text}>
                <slot slot="custom_button">
                    <div on:click={ToggleModal}>
                        <ButtonComponent icon={'faXmark'} color={'bg-transparent'}></ButtonComponent>
                    </div>
                </slot>
                <slot slot="content">
                    <slot name="content">
                    </slot>
                </slot>
                <slot slot="footer">
                    <slot name="footer">
                    </slot>
                </slot>
            </CardComponents>
        {:else}
            <CardComponents class="m-auto bg-white col-span-8" title={text}>
                <slot slot="content">
                    <slot name="content">

                    </slot>
                </slot>
            </CardComponents>
        {/if}
    </div>
</div>