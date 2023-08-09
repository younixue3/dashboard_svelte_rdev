<script context="module">
    import {chart} from 'svelte-apexcharts?client';

    let options = {
        chart: {
            type: "line",
            toolbar: {
                show: false
            },
            height: '100%',
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        series: [
            {
                name: "sales",
                data: [30, 40, 35, 50, 49],
            },
        ],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995],
        },
        yaxis: {
            show: false
        },
        grid: {
            show: false
        }
    };

</script>

<div class="grid grid-cols-4 gap-3">
    <div class="bg-white shadow-lg rounded-lg relative">
        <div>Avg. Visit Duration</div>
        <div class="grid border grid-cols-2 h-48">
            <div class="h-full"></div>
            <div class="flex ">
                <div class="m-uto" use:chart={options}/>
            </div>
        </div>
    </div>
</div>
