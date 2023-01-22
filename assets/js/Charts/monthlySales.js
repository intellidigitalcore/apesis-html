let data = {
    datasets: [{
            label: ' Sales',
            data: [{
                x: 0,
                y: 2,
                labelText: "01/12/2022"
            }, {
                x: 1,
                y: 10,
                labelText: "02/12/2022"
            }, {
                x: 2,
                y: 5,
                labelText: "03/12/2022"
            }, {
                x: 3,
                y: 20,
                labelText: "03/12/2022"
            },{
                x: 4,
                y: 73,
                labelText: "01/12/2022"
            }, {
                x: 5,
                y: 70,
                labelText: "02/12/2022"
            }, {
                x: 6,
                y: 5,
                labelText: "03/12/2022"
            }, {
                x: 7,
                y: 10,
                labelText: "03/12/2022"
            }],
            fill: false,
            showLine: true,
            borderColor: '#228FF3',
            backgroundColor: '#228FF3',
            pointRadius: 0,
            cubicInterpolationMode: 'monotone',
            borderWidth: 10,
        }
    ]
};

let options = {
    scales: {
        x: {
          grid: {
            display: false
          }
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function (ctx) {
                    let lab = ctx.dataset.label + ": " + ctx.dataset.data[ctx.dataIndex].labelText +
                        " ~ " + ctx.dataset.data[ctx.dataIndex].y + "k";
                    return lab;
                },
                title: function (ctx) {
                    return "Revenue";
                }
            }
        }
    }
};

const ctx = document.getElementById("chartLite").getContext("2d");
const myChart = new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: options
});