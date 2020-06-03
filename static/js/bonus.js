function getGauge(id) {
    d3.json("data/samples.json").then((data) => {
        var filterData = data.metadata.filter(sample => sample.id.toString() === id)[0];
        console.log(filterData)
        var wfreq = filterData.wfreq;

        var data = [
            {
            domain: {x: [0,1],
                     y: [0,1]},
            value: wfreq,
            title: {text: "Washing Frequency per Week"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 10},
            gauge: {axis: {visible: true, 
                           range: [0,9]}}
            }
        ];

        var layout = {width: 600, height: 500, margin: {t:0, b:0}};

        Plotly.newPlot('gauge', data, layout)
    });
}