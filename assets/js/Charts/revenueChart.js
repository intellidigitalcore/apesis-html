let data = {
    datasets: [{
            label: 'Google Ads',
            data: [{
                x: 0,
                y: 123,
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
                y: 113,
                labelText: "01/12/2022"
            }, {
                x: 5,
                y: 10,
                labelText: "02/12/2022"
            }, {
                x: 6,
                y: 5,
                labelText: "03/12/2022"
            }, {
                x: 7,
                y: 40,
                labelText: "03/12/2022"
            }],
            fill: false,
            showLine: true,
            borderColor: '#228FF3',
            backgroundColor: '#228FF3',
            pointRadius: 0,
            cubicInterpolationMode: 'monotone'
        },
        {
            label: 'Facebook Ads',
            data: [{
                x: 0,
                y: 25,
                labelText: "01/11/2022"
            }, {
                x: 1,
                y: 49,
                labelText: "02/11/2022"
            }, {
                x: 2,
                y: 15,
                labelText: "03/11/2022"
            }, {
                x: 3,
                y: 100,
                labelText: "03/11/2022"
            },{
                x: 4,
                y: 25,
                labelText: "01/11/2022"
            }, {
                x: 5,
                y: 49,
                labelText: "02/11/2022"
            }, {
                x: 6,
                y: 15,
                labelText: "03/11/2022"
            }, {
                x: 7,
                y: 120,
                labelText: "03/11/2022"
            }],
            fill: false,
            showLine: true,
            borderColor: '#E58C3C',
            backgroundColor: '#E58C3C',
            pointRadius: 0,
            cubicInterpolationMode: 'monotone'
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