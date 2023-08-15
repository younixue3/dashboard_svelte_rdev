<script lang="ts">
    import {setContext} from "svelte";
    import {faCaretUp, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
    import ChartComponent from "../../../../Components/Charts/ChartComponent.svelte";
    import ButtonComponent from "../../../../Components/Button/ButtonComponent.svelte";
    import PaginationComponent from "../../../../Components/Pagination/PaginationComponent.svelte";

    setContext('counter', { changePage });

    let pageData = 10;

    $: indexPage = 1;

    function changePage(pageNumber) {
        console.log(pageNumber)
        indexPage = pageNumber
    }
    const getData = (max) => {
        let array = [];
        for (let i = 0; i < max; i++) {
            array.push(Math.floor(100 + Math.random() * 900))
        }
        return array
    }
</script>

<div class="grid grid-cols-8 gap-3">
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Avg. Visit Duration
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto"/>
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500">
                    <Fa icon={faCaretUp} class="inline mr-1"/>
                    06.41% Last Month
                </div>
            </div>
            <div class="flex">
                <ChartComponent data={{categories: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],data: getData(7)}} type='line'
                                colors="#F94C10"/>
            </div>
        </div>
    </div>
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Product Purchase
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto"/>
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500">
                    <Fa icon={faCaretUp} class="inline mr-1"/>
                    06.41% Last Month
                </div>
            </div>
            <div class="flex">
                <ChartComponent data={{categories: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],data: getData(7)}} type='line'
                                colors="#6F61C0"/>
            </div>
        </div>
    </div>
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Impressions
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto"/>
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500">
                    <Fa icon={faCaretUp} class="inline mr-1"/>
                    06.41% Last Month
                </div>
            </div>
            <div class="flex">
                <ChartComponent data={{categories: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],data: getData(7)}} type='line'
                                colors="#F11A7B"/>
            </div>
        </div>
    </div>
    <div class="bg-white col-span-2 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Active Users
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto"/>
        </div>
        <div class="flex">
            <div class="h-full w-1/2 p-4 flex flex-col gap-5">
                <div class="text-xl font-bold">368k</div>
                <div class="text-xs text-emerald-500">
                    <Fa icon={faCaretUp} class="inline mr-1"/>
                    06.41% Last Month
                </div>
            </div>
            <div class="flex">
                <ChartComponent data={{categories: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],data: getData(7)}} type='line'
                                colors="#3AA6B9"/>
            </div>
        </div>
    </div>
    <div class="bg-white col-span-5 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Browser Usage
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto"/>
        </div>
        <div>
            <ChartComponent
                    data={{categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT','01/05/2011 GMT', '01/06/2011 GMT'], data: [{name: 'Chrome', data: getData(6)}, {name: 'Edge', data: getData(6)}, {name: 'Firefox', data: getData(6)}]}}
                    type='bar-stacked' colors="#3AA6B9"/>
        </div>
    </div>
    <div class="bg-white col-span-3 shadow-md rounded-lg relative">
        <div class="flex justify-end p-2 px-4">
            <div class="w-full">
                Users Age Range
            </div>
            <Fa icon={faEllipsisVertical} class="inline m-auto"/>
        </div>
        <div>
            <ChartComponent data={{labels: ['13-17', '18-24', '25-34', '34-44', '45-54'], data: getData(5)}}
                            type='donut' colors="#3AA6B9"/>
        </div>
    </div>
    <div class="bg-white col-span-7 shadow-md rounded-lg relative px-5">
        <table class="w-full table-auto text-sm text-center mt-5 mb-2">
            <thead class="h-10">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <!--                    <th>Payment</th>-->
                <th>Date</th>
                <!--                    <th>Delivery</th>-->
                <th>Status</th>
                <th>Total</th>
                <th>#</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            <tr>
                <td>#1231</td>
                <td>Ricko Caesar Aprilla Tiaka</td>
                <!--                <td>Credit</td>-->
                <td>17 August, 2023</td>
                <!--                <td>Regular</td>-->
                <td>On Delivery</td>
                <td>Rp. 100,500</td>
                <td class="px-2">
                    <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                        <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
                        <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
                    </ButtonComponent>
                </td>
            </tr>
            </tbody>
        </table>
        <PaginationComponent totalPage={pageData} indexPage={indexPage} />
    </div>
</div>
