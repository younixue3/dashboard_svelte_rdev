<script>
    import { page } from '$app/stores';
    import CardComponents from "../../../../Components/Card/CardComponents.svelte";
    import {faLink} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
    import ButtonComponent from "../../../../Components/Button/ButtonComponent.svelte";
</script>


<div class="grid grid-cols-4 gap-3">
    <CardComponents class="bg-white col-span-4 row-span-1">
        <div slot="content">
            <div class="flex">
                <img class="w-full h-96 object-cover" src="https://images.wallpaperscraft.com/image/single/sea_buildings_castle_1003554_3840x2400.jpg" />
                <div class="absolute h-2/5 w-full bottom-0 py-2 bg-white">
                    <div class="flex relative w-full">
                        <div class="w-1/6 flex">
                            <img class="border-white m-auto border-8 w-32 h-32 rounded-full transform -translate-y-1/2 object-cover object-top" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
                        </div>
                        <div class="w-4/6 pr-10">
                            <h1 class="text-4xl font-bold">Jane Doe</h1>
                            <h2 class="text-xs">Front-End Developer || CEO of RDev Company</h2>
                            <div class="leading-4 text-sm font-light py-2">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin semper dapibus. Donec lobortis semper quam et commodo. Aenean tincidunt nunc non augue tempor blandit. Morbi non elit aliquam urna commodo varius at in turpis. Ut ipsum elit, bibendum et lectus sed, tristique tincidunt nibh.
                                </div>
                            </div>
                        </div>
                        <div class="w-1/6 flex flex-col gap-2 px-2">
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
        </div>
    </CardComponents>
    <CardComponents class="bg-white col-span-1">
        <div slot="content">
            <div class="flex flex-col divide divide-y text-sm">
                <div class="p-1 px-3">
                    <span class="font-light text-gray-500">Email Address</span>
                    <span class="block font-medium">ricko.tiaka@example.com</span>
                </div>
                <div class="p-1 px-3">
                    <span class="font-light text-gray-500">Phone Number</span>
                    <span class="block font-medium">+62 0852-1234-5678</span>
                </div>
                <div class="p-1 px-3">
                    <span class="font-light text-gray-500">Address</span>
                    <span class="block font-medium">Indonesia, East Kalimantan, Balikpapan CIty, Indra Kila Street</span>
                </div>
                <div class="p-1 pb-3 px-3">
                    <span class="font-light text-gray-500">Website</span>
                    <div>
                        <button class="rounded-full bg-blue-100 hover:bg-blue-200 w-full text-xs text-blue-800 px-2 py-1">
                            <a href="https://itsme-ricko.vercel.app/" class="mb-2"><Fa icon={faLink} class="inline mr-1"/>https://itsme-ricko.vercel.app/</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </CardComponents>
    <CardComponents class="bg-transparent col-span-3 bg-transparent shadow-none row-span-4">
        <div slot="content">
            <div class="border-b">
                <div class="flex -mb-px bg-white">
                    <a href="/page/profile" class="text-gray-400 hover:text-blue-400 focus:text-blue-600 px-5 py-3 border-b-2 hover:border-blue-400 focus:border-blue-600">Posts</a>
                    <a href="/page/profile/media" class="text-gray-400 hover:text-blue-400 focus:text-blue-600 px-5 py-3 border-b-2 hover:border-blue-400 focus:border-blue-600">Media</a>
                    <button class="text-gray-400 hover:text-blue-400 focus:text-blue-600 px-5 py-3 border-b-2 hover:border-blue-400 focus:border-blue-600">About</button>
                </div>
            </div>
<!--Content Profile Home Page-->
            <slot></slot>
<!--End Content Profile Home Page-->
        </div>
    </CardComponents>
    <CardComponents class="bg-white " action_button="true" title="Follower">
        <div slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </div>
        <div slot="content">
            <div class="p-1 px-3">
                <div class="flex py-2">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/self-confident-young-man.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/you-can-call-me-a-tech-user.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/just-enjoying-coffee-while-walking-around.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/i'm-gonna-put-them-in-the-safest-place.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/guess-this-jacket-goes-along-with-black-colour-quite-well.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/feeling-way-too-cool-for-this-place.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/self-confident-young-man.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/you-can-call-me-a-tech-user.jpg?raw=true">
                    <div class="ml-5 m-auto">+1k</div>
                </div>
            </div>
        </div>
    </CardComponents>
    <CardComponents class="bg-white " action_button="true" title="Following">
        <div slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </div>
        <div slot="content">
            <div class="p-1 px-3">
                <div class="flex py-2">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/self-confident-young-man.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/you-can-call-me-a-tech-user.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/just-enjoying-coffee-while-walking-around.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/i'm-gonna-put-them-in-the-safest-place.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/guess-this-jacket-goes-along-with-black-colour-quite-well.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/feeling-way-too-cool-for-this-place.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/self-confident-young-man.jpg?raw=true">
                    <img class="border-2 border-gray-500 shadow rounded-full h-8 w-8 -mr-3 hover:z-10 transform hover:scale-125 transition ease-in-out object-cover object-top" src="https://github.com/younixue3/stock_photo_rdev/blob/main/you-can-call-me-a-tech-user.jpg?raw=true">
                    <div class="ml-5 m-auto">+1k</div>
                </div>
            </div>
        </div>
    </CardComponents>
</div>
