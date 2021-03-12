const data = [
    ['nl-fr', 41],
    ['nl-gr', 48],
    ['nl-fl', 60],
    ['nl-ze', 57],
    ['nl-nh', 61],
    ['nl-zh', 69],
    ['nl-dr', 53],
    ['nl-ge', 64],
    ['nl-li', 69],
    ['nl-ov', 52],
    ['nl-nb', 60],
    ['nl-ut', 70]
];

// console.log("Data ", data[0] = `${countryObject[0].name}`, countryObject[0].value);
// console.log("data new version ", data)
// console.log(data[12])
// const hasNameOfProvince = countryObject.map(value => value.name);

// const hasNumberValue = countryObject.map(number => number.value);


const mapChartJSON = {
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
                [0, '#cddee4'],
                [1, '#4b96af'],
            ]
        },
    },

    title: {
        text: 'Landkaart Nederland'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        },
    },

    colorAxis: {
        dataClasses: colorObject,
    },

    series: [{
        data: data,
        mapData: Highcharts.maps["countries/nl/nl-all"],
        name: "Provincie",
        dataLabels: {
            enabled: true,
            format: '{point.name}',
        },
    }],
};

mapChartJSON.title.text = "dynamische titel";

mapChartJSON.series[0].data.forEach(data => {
    console.log('for hc-key: ' + data['hc-key'] + ' name of data is ' + data[0] + data[1]);
})

Highcharts.mapChart("container", mapChartJSON);
