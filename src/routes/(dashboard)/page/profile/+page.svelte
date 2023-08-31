<script>
    import { page } from '$app/stores';
    import CardComponents from "../../../../Components/Card/CardComponents.svelte";
    import {faLink} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
</script>


<div class="grid grid-cols-4 gap-3">
    <CardComponents class="col-span-4 row-span-1">
        <slot slot="content">
            <div class="flex">
                <img class="w-full h-96 object-cover" src="https://images.wallpaperscraft.com/image/single/sea_buildings_castle_1003554_3840x2400.jpg" />
                <div class="absolute h-2/5 w-full bottom-0 bg-white p-2 px-5">
                    <div class="flex relative w-full">
                        <div class="w-60 m-auto">
                            <img class="border-white border-8 rounded-full h-40 w-40 transform -translate-y-1/2 object-cover object-top" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
                        </div>
                        <div class="w-full pr-10">
                            <h1 class="text-4xl font-bold">Jane Doe</h1>
                            <h2 class="text-xs">Front-End Developer || CEO of RDev Company</h2>
                            <div class="leading-4 text-sm font-light py-2">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin semper dapibus. Donec lobortis semper quam et commodo. Aenean tincidunt nunc non augue tempor blandit. Morbi non elit aliquam urna commodo varius at in turpis. Ut ipsum elit, bibendum et lectus sed, tristique tincidunt nibh.
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
    <CardComponents class="col-span-1">
        <slot slot="content">
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
        </slot>
    </CardComponents>
    <CardComponents class="col-span-3 row-span-4">
        <slot slot="content">
            <div class="border-b">
                <div class="flex -mb-px">
                    <button class="text-gray-400 hover:text-blue-400 focus:text-blue-600 px-5 py-3 border-b-2 hover:border-blue-400 focus:border-blue-600">Posts</button>
                    <button class="text-gray-400 hover:text-blue-400 focus:text-blue-600 px-5 py-3 border-b-2 hover:border-blue-400 focus:border-blue-600">Media</button>
                    <button class="text-gray-400 hover:text-blue-400 focus:text-blue-600 px-5 py-3 border-b-2 hover:border-blue-400 focus:border-blue-600">About</button>
                </div>
            </div>
            <div class="flex flex-col gap-3 p-3">
                <div class="rounded-xl border-2">
                    <div class="p-3">
                        <div class="flex gap-3">
                            <img class="border rounded-full h-12 w-12 object-cover object-top" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
                            <div class="my-auto">
                                Jane Doe
                            </div>
                        </div>
                        <div class="p-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien nec tellus auctor congue vel non felis. Nulla quis tincidunt quam. Ut consequat, dui ut lobortis hendrerit, diam magna accumsan neque, ut pharetra velit nulla nec est. Integer molestie nunc nec mi bibendum, quis imperdiet libero mollis. Aliquam volutpat eget orci id molestie. Mauris porttitor, mi nec tristique egestas, risus quam pulvinar enim, non vestibulum justo mauris congue justo. Cras et sem eu ex aliquam fermentum. Mauris egestas sapien eget est maximus aliquet. Fusce hendrerit odio urna, a scelerisque nisl ullamcorper quis.</p>
                            <div class="p-4">
                                <img alt="foto" class="w-full h-96 object-cover rounded-lg" src="https://images.wallpaperscraft.com/image/single/sea_buildings_castle_1003554_3840x2400.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </slot>
    </CardComponents>
    <CardComponents class="">
        <slot slot="content">
            <div class="p-1 px-3">
                <span class="font-light text-gray-500">Follower</span>
                <span class="block font-medium">Indonesia, East Kalimantan, Balikpapan CIty, Indra Kila Street</span>
            </div>
        </slot>
    </CardComponents>
</div>