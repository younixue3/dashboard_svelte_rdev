<script>
    import {chart} from 'svelte-apexcharts?client';

    export let colors;
    export let type;
    export let data;

    let options = {};

    if (type === 'line') {
        options = {
            chart: {
                type: "line",
                toolbar: {
                    show: false
                },
                height: '100%',
                width: '100%'
            },
            stroke: {
                curve: 'smooth',
                width: 2,
                colors: colors
            },
            series: [
                {
                    name: "sales",
                    data: data.data,
                },
            ],
            xaxis: {
                categories: data.categories,
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            }
        };
    } else if (type === 'bar-stacked') {
        options = {
            series: data.data,
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 0,
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900
                            }
                        }
                    }
                },
            },
            xaxis: {
                type: 'datetime',
                categories: data.categories,
            },
            legend: {
                position: 'right',
                offsetY: 40
            },
            fill: {
                opacity: 1
            }
        };
    } else if (type === 'donut') {
        options = {
            series: data.data,
            chart: {
                type: 'donut',
            },
            labels: data.labels,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
    }
</script>

<div class="mt-auto" use:chart={options}/>
