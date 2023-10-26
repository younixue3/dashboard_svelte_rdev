<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faChevronDown, faSignOut} from '@fortawesome/free-solid-svg-icons';
    import ButtonComponent from "../Button/ButtonComponent.svelte";


</script>

<div class="flex justify-between">
    <span class="w-full">
        <img class="border rounded-full h-8 w-8 m-auto object-cover object-top"
             src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
    </span>
    <div class="mr-auto my-auto text-sm grow">
        <strong>Jane Doe</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere volutpat purus, a hendrerit lorem
            bibendum eget. Morbi vulputate urna id sapien blandit elementum. In convallis, enim vitae hendrerit cursus,
            ante dolor consequat ipsum, aliquam tempor elit erat ac enim. In hac habitasse platea dictumst. Suspendisse
            pretium tristique orci, quis luctus neque iaculis auctor. Mauris et dignissim odio. Proin nec luctus nulla.
            Proin et erat ac ligula fringilla ultrices. Aliquam ullamcorper sodales metus, in tempor urna vulputate eu.
            Integer sed lacinia purus. Sed nisi nisi, mollis sed ultrices ac, condimentum sed ex.</p>
    </div>
    <div class="px-3">
        <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
            <slot name="actions_button">
                <a class="p-1 rounded-md hover:bg-gray-200" href="">Edit</a>
                <a class="p-1 rounded-md hover:bg-gray-200" href="">Archive</a>
                <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
            </slot>
        </ButtonComponent>
    </div>
</div>
<!--    <div class="col-span-11">-->
<!--        <strong>Ricko Caesar Aprilla Tiaka</strong>-->
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere volutpat purus, a hendrerit lorem bibendum eget. Morbi vulputate urna id sapien blandit elementum. In convallis, enim vitae hendrerit cursus, ante dolor consequat ipsum, aliquam tempor elit erat ac enim. In hac habitasse platea dictumst. Suspendisse pretium tristique orci, quis luctus neque iaculis auctor. Mauris et dignissim odio. Proin nec luctus nulla. Proin et erat ac ligula fringilla ultrices. Aliquam ullamcorper sodales metus, in tempor urna vulputate eu. Integer sed lacinia purus. Sed nisi nisi, mollis sed ultrices ac, condimentum sed ex.</p>-->
<!--    </div>-->