<script lang="ts">
    import {setContext} from "svelte";
    import {faCaretUp, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
    import ChartComponent from "../../../Components/Charts/ChartComponent.svelte";
    import ButtonComponent from "../../../Components/Button/ButtonComponent.svelte";
    import PaginationComponent from "../../../Components/Pagination/PaginationComponent.svelte";
    import CardComponents from "../../../Components/Card/CardComponents.svelte";

    setContext('counter', { changePage, pagePrevNext });

    let pageData = 20;

    $: indexPage = 1;

    function changePage(pageNumber) {
        if (pageNumber >= 1 || pageNumber <= pageData) {
            indexPage = pageNumber
        }
    }

    function pagePrevNext(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= pageData) {
            indexPage = pageNumber
        }
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
    <CardComponents class="bg-white col-span-2" action_button="true" title="Visit Duration">
        <slot slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
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
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-2" action_button="true" title="Product Purchase">
        <slot slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
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
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-2" action_button="true" title="Impressions">
        <slot slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
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
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-2" action_button="true" title="Active Users">
        <slot slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
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
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-5" action_button="true" title="Browsers Usage">
        <slot slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
            <ChartComponent
                    data={{categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT','01/05/2011 GMT', '01/06/2011 GMT'], data: [{name: 'Chrome', data: getData(6)}, {name: 'Edge', data: getData(6)}, {name: 'Firefox', data: getData(6)}]}}
                    type='bar-stacked' colors="#3AA6B9"/>
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-3" action_button="true">
        <slot name="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
            <ChartComponent data={{labels: ['13-17', '18-24', '25-34', '34-44', '45-54'], data: getData(5)}}
                            type='donut' colors="#3AA6B9"/>
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-6">
        <slot slot="content">
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
        </slot>
    </CardComponents>
    <CardComponents class="bg-white col-span-2" action_button="true" title="To-do List">
        <slot slot="actions_button">
            <a class="p-1 rounded-md hover:bg-gray-200" href="">Detail</a>
            <a class="p-1 rounded-md text-red-500 hover:bg-gray-200" href="">Delete</a>
        </slot>
        <slot slot="content">
            <div class="p-3">
                <ul class="flex flex-col gap-2">
                    <li class="border border-orange-400 rounded-lg p-3 flex gap-3">
                        <input class="accent-orange-400 focus:accent-orange-400" type="checkbox">
                        <p class="leading-4 text-sm font-medium">
                            The recognition that one has a mental illness
                        </p>
                    </li>
                    <li class="border border-orange-400 rounded-lg p-3 flex gap-3">
                        <input class="accent-orange-400 focus:accent-orange-400" type="checkbox">
                        <p class="leading-4 text-sm font-medium">
                            The recognition that one has a mental illness
                        </p>
                    </li>
                    <li class="border border-orange-400 rounded-lg p-3 flex gap-3">
                        <input class="accent-orange-400 focus:accent-orange-400" type="checkbox">
                        <p class="leading-4 text-sm font-medium">
                            The recognition that one has a mental illness
                        </p>
                    </li>
                    <li class="border border-orange-400 rounded-lg p-3 flex gap-3">
                        <input class="accent-orange-400 focus:accent-orange-400" type="checkbox">
                        <p class="leading-4 text-sm font-medium">
                            The recognition that one has a mental illness
                        </p>
                    </li>
                    <li class="border border-orange-400 rounded-lg p-3 flex gap-3">
                        <input class="accent-orange-400 focus:accent-orange-400" type="checkbox">
                        <p class="leading-4 text-sm font-medium">
                            The recognition that one has a mental illness
                        </p>
                    </li>
                </ul>
            </div>
        </slot>
    </CardComponents>
</div>
