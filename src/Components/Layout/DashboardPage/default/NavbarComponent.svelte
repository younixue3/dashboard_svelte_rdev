<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faChevronDown, faSignOut} from '@fortawesome/free-solid-svg-icons';
    import ButtonComponent from "../../../Button/ButtonComponent.svelte";

    let toggle = false;

    function ToogleDropdown() {
        toggle = toggle == false;
    }

</script>

<div class="fixed z-40 flex lg:h-full w-full lg:w-auto">
    <div on:click={ToogleDropdown} class="lg:hidden bg-white flex p-2 w-full h-10">
        <ButtonComponent icon="faBars"/>
    </div>
    <div class="bg-black/50 lg:bg-black/0 z-50 backdrop-blur-sm lg:backdrop-blur-none absolute lg:static overflow-hidden h-screen lg:h-auto w-screen lg:w-auto transition-all ease-in-out "
         class:hidden={toggle}>
        <div class="p-3 h-full">
            <div class="bg-white h-full md:w-80 lg:w-full flex p-4 lg:pt-8 flex-col rounded-2xl shadow-md transition-all ease-in-out">
                <div on:click={ToogleDropdown} class="h-10 lg:hidden ml-auto">
                    <ButtonComponent icon="faXmark"></ButtonComponent>
                </div>
                <div class="flex gap-2 p-3 rounded-lg border-2">
                    <svg
                            class="h-12 w-12 rounded-xl lg:m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Svelte"
                            role="img"
                            viewBox="0 0 512 512"
                            fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier"
                        >
                            <rect width="512" height="512" rx="15%" fill="#ff3e00"/>
                            <path
                                    fill="#ffffff"
                                    d="M395 115c-35-51-106-66-157-34l-89 57a103 103 0 00-46 69 108 108 0 0010 69 103 103 0 00-15 39 109 109 0 0019 82c35 51 106 66 157 34l89-57a103 103 0 0046-69 108 108 0 00-10-69 103 103 0 0015-39 109 109 0 00-19-82"
                            />
                            <path
                                    fill="#ff3e00"
                                    d="M230 402a71 71 0 01-77-28 66 66 0 01-11-50 62 62 0 012-8l2-5 5 3a115 115 0 0035 17l3 1v4a20 20 0 003 13 21 21 0 0023 9 20 20 0 006-3l89-57a19 19 0 008-12 20 20 0 00-3-15 21 21 0 00-23-9 20 20 0 00-5 3l-34 21a65 65 0 01-19 8 71 71 0 01-76-28 66 66 0 01-11-50 62 62 0 0128-41l89-57a65 65 0 0118-8 71 71 0 0177 28 66 66 0 0111 50 63 63 0 01-2 8l-2 5-5-3a115 115 0 00-35-17l-3-1v-4a20 20 0 00-3-13 21 21 0 00-23-9 20 20 0 00-6 3l-89 57a19 19 0 00-8 12 20 20 0 003 15 21 21 0 0023 9 20 20 0 005-3l34-21a65 65 0 0119-8 71 71 0 0176 28 66 66 0 0111 50 62 62 0 01-28 41l-89 57a65 65 0 01-18 8"
                            />
                        </g
                        >
                    </svg
                    >
                    <div class="lg:m-auto h-full flex py-0.5 flex-col justify-between">
                        <div>
                            <div class="text-sm font-medium leading-3">Ricko Tiaka</div>
                            <div class="text-xs font-light leading-4">ricko_tiaka@example.com</div>
                        </div>
                        <a href="/profile" class="text-xs text-blue-500 underline">View profile</a>
                    </div>
                </div>
                <div class="space-y-2 h-full w-full text-left overflow-y-auto my-10">
                    <slot>

                    </slot>
                </div>
                <div>
                    <a class="text-gray-600 hover:text-orange-600 font-semibold py-1" href='/dashboard'>
                        <div class="w-full">
                            <Fa icon={faSignOut} class="w-10 inline"/>
                            Logout
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>