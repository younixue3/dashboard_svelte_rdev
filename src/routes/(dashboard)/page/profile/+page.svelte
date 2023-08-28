<script>
    import { page } from '$app/stores';
    import CardComponents from "../../../../Components/Card/CardComponents.svelte";
    import {faLink} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
</script>


<div class="grid grid-cols-4 gap-3">
    <CardComponents class="col-span-4">
        <slot slot="content">
            <div class="flex">
                <img class="w-full h-80 object-cover" src="https://images.wallpaperscraft.com/image/single/sea_buildings_castle_1003554_3840x2400.jpg" />
                <div class="absolute h-2/5 w-full bottom-0 bg-white p-2 px-5">
                    <div class="flex relative w-full">
                        <div class="w-60 m-auto">
                            <img class="border-white border-8 rounded-full h-40 w-40 transform -translate-y-1/2 object-cover object-top" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
                        </div>
                        <div class="w-full">
                            <h1 class="text-4xl font-bold">Jane Doe</h1>
                            <h2 class="text-xs">Front-End Developer || CEO of RDev Company</h2>
                            <div class="leading-4 text-sm font-light py-2">
                                <div>
                                    <button class="rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1">
                                        <a href="https://itsme-ricko.vercel.app/" class="mb-2"><Fa icon={faLink} class="inline mr-1"/>https://itsme-ricko.vercel.app/</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="w-56 flex flex-col gap-2">
                            <div class="rounded-md border flex">
                                <img src="" alt="logo" />
                                <h3 class="text-sm">Your Name Company</h3>
                            </div>
                            <div class="rounded-md border flex">
                                <img src="" alt="logo" />
                                <h3 class="text-sm">Your Name College</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </slot>
    </CardComponents>
    <CardComponents class="col-span-4">
        <slot slot="content">
            ad
        </slot>
    </CardComponents>
</div>