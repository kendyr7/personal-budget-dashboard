// AREA CHART

var optionsArea = {
    chart: {
        height: 380,
        type: 'area',
        stacked: false,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ["#fe5507", '#fe016f', '#8637e8'],
    series: [{
        name: "Outcomes",
        data: [62, 40, 28, 51, 42, 109, 100, 28, 51, 42, 109, 100]
    },
        {
            name: "Incomes",
            data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52]
        },
        {
            name: "Savings",
            data: [20, 39, 52, 11, 29, 43, 54, 39, 52, 11, 29, 43]
        }
    ],
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
        shared: false,
        followCursor: true
    },
    fill: {
        opacity: 1,
    },

}
var chartArea = new ApexCharts(
    document.querySelector("#areachart"),
    optionsArea
);
chartArea.render();