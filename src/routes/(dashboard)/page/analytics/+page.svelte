<script>
    import {faCaretUp, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
    import ChartComponent from "../../../../Components/Charts/ChartComponent.svelte";

</script>

<div class="grid grid-cols-8 gap-3">
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Avg. Visit Duration
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto" />
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500"> <Fa icon={faCaretUp} class="inline mr-1" />06.41% Last Month</div>
            </div>
            <div class="flex">
                <ChartComponent type='line' colors="#F94C10" />
            </div>
        </div>
    </div>
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Avg. Visit Duration
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto" />
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500"> <Fa icon={faCaretUp} class="inline mr-1" />06.41% Last Month</div>
            </div>
            <div class="flex">
                <ChartComponent type='line' colors="#6F61C0" />
            </div>
        </div>
    </div>
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Avg. Visit Duration
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto" />
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500"> <Fa icon={faCaretUp} class="inline mr-1" />06.41% Last Month</div>
            </div>
            <div class="flex">
                <ChartComponent type='line' colors="#F11A7B" />
            </div>
        </div>
    </div>
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Avg. Visit Duration
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto" />
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500"> <Fa icon={faCaretUp} class="inline mr-1" />06.41% Last Month</div>
            </div>
            <div class="flex">
                <ChartComponent type='line' colors="#3AA6B9" />
            </div>
        </div>
    </div>
    <div class="bg-white col-span-5 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Avg. Visit Duration
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto" />
        </div>
        <div>
            <ChartComponent type='bar-stacked' colors="#3AA6B9" />
        </div>
    </div>
</div>
