<script>

import CardComponents from "../../../../Components/Card/CardComponents.svelte";
import ButtonComponent from "../../../../Components/Button/ButtonComponent.svelte";
import CommentComponent from "../../../../Components/Social Media/CommentComponent.svelte";

</script>


<div class="grid grid-cols-1 gap-3 py-3">
    <CardComponents class="bg-white">
        <slot slot="content">
            <div class="p-3">
                <div class="flex justify-between gap-3">
                    <img class="border rounded-full h-12 w-12 object-cover object-top" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg">
                    <div class="mr-auto my-auto">
                        Jane Doe
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
                <div class="p-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien nec tellus auctor congue vel non felis. Nulla quis tincidunt quam. Ut consequat, dui ut lobortis hendrerit, diam magna accumsan neque, ut pharetra velit nulla nec est. Integer molestie nunc nec mi bibendum, quis imperdiet libero mollis. Aliquam volutpat eget orci id molestie. Mauris porttitor, mi nec tristique egestas, risus quam pulvinar enim, non vestibulum justo mauris congue justo. Cras et sem eu ex aliquam fermentum. Mauris egestas sapien eget est maximus aliquet. Fusce hendrerit odio urna, a scelerisque nisl ullamcorper quis.</p>
                    <div class="p-4">
                        <img alt="foto" class="w-full h-96 object-cover rounded-lg" src="https://images.wallpaperscraft.com/image/single/sea_buildings_castle_1003554_3840x2400.jpg" />
                    </div>
                </div>
            </div>
        </slot>
        <slot slot="footer">
            <div class="flex border-b p-2">
                <ButtonComponent icon="faThumbsUp" class="hover:bg-blue-600 hover:text-white focus:text-blue-600 focus:bg-blue-200" text="Like"/>
                <ButtonComponent icon="faComment" class="hover:bg-emerald-600 hover:text-white focus:text-emerald-600 focus:bg-emerald-200" text="Comment"/>
                <ButtonComponent icon="faShare" class="hover:bg-orange-600 hover:text-white focus:text-orange-600 focus:bg-orange-200" text="Share"/>
            </div>
            <div class="grid grid-cols-1 gap-3 pl-5">
                <CommentComponent>
                    <slot slot="comment_section">
                        <CommentComponent second_comment={false} />
                        <CommentComponent second_comment={false} />
                    </slot>
                </CommentComponent>
            </div>
        </slot>
    </CardComponents>
</div>