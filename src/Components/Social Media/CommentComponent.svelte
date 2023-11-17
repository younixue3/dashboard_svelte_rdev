<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faChevronDown, faSignOut} from '@fortawesome/free-solid-svg-icons';
    import ButtonComponent from "../Button/ButtonComponent.svelte";

    export let second_comment = true;


</script>

<div>
    <div class="flex justify-between gap-3 group border-l-2 pl-5 pt-5">
        <span class="relative block flex-none">
            <img class="border rounded-full h-8 w-8 m-auto object-cover object-top"
                 src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
        </span>
        <div class="mr-auto my-auto text-sm">
            <strong>Jane Doe</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere volutpat purus, a hendrerit lorem
                bibendum eget. Morbi vulputate urna id sapien blandit elementum. In convallis, enim vitae hendrerit
                cursus,
                ante dolor consequat ipsum, aliquam tempor elit erat ac enim. In hac habitasse platea dictumst.
                Suspendisse
                pretium tristique orci, quis luctus neque iaculis auctor. Mauris et dignissim odio. Proin nec luctus
                nulla.
                Proin et erat ac ligula fringilla ultrices. Aliquam ullamcorper sodales metus, in tempor urna vulputate
                eu.
                Integer sed lacinia purus. Sed nisi nisi, mollis sed ultrices ac, condimentum sed ex.</p>
            <div class="flex py-2">
                <ButtonComponent icon="faThumbsUp" class="hover:bg-blue-600 hover:text-white focus:text-blue-600 focus:bg-blue-200" text="Like"/>
                {#if second_comment}
                    <ButtonComponent icon="faReply" class="hover:bg-emerald-600 hover:text-white focus:text-emerald-600 focus:bg-emerald-200" text="Reply"/>
                {/if}
            </div>
<!--            <div class="p-4">-->
<!--                <img class="w-full h-52 object-cover rounded-lg"-->
<!--                     src="https://images.wallpaperscraft.com/image/single/sea_buildings_castle_1003554_3840x2400.jpg">-->
<!--            </div>-->
        </div>
        <div class="px-3">
            <div class="w-1 h-full">
                <ButtonComponent class="hidden group-hover:block" icon="faEllipsisVertical" color="bg-clear"
                                 dropdown="true">
                    <slot name="actions_button">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Edit</a>
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Archive</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </slot>
                </ButtonComponent>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 pl-5">
        <slot name="comment_section"></slot>
    </div>
</div>
<!--    <div class="col-span-11">-->
<!--        <strong>Ricko Caesar Aprilla Tiaka</strong>-->
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere volutpat purus, a hendrerit lorem bibendum eget. Morbi vulputate urna id sapien blandit elementum. In convallis, enim vitae hendrerit cursus, ante dolor consequat ipsum, aliquam tempor elit erat ac enim. In hac habitasse platea dictumst. Suspendisse pretium tristique orci, quis luctus neque iaculis auctor. Mauris et dignissim odio. Proin nec luctus nulla. Proin et erat ac ligula fringilla ultrices. Aliquam ullamcorper sodales metus, in tempor urna vulputate eu. Integer sed lacinia purus. Sed nisi nisi, mollis sed ultrices ac, condimentum sed ex.</p>-->
<!--    </div>-->