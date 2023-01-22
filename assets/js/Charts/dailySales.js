/* Chart JS https://www.chartjs.org */
const ctxxx = document.querySelector("#myChartSales").getContext("2d");

let delayed;

// Gradient fill
let gradient = ctxxx.createLinearGradient(0, 0, 0, 400); // from the bottom to the top
gradient.addColorStop(0, "rgba(58,123,213,1)");
gradient.addColorStop(1, "rgba(0,210,255,.3)");

const labels = [
"Janu",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec",
];

const dataaa = {
labels,
datasets: [
    {
    data: [211, 326, 265, 350, 420, 370, 480, 375, 415, 335, 405, 300],
    label: "Sales",
    fill: true,
    backgroundColor: gradient,
    borderColor: "#fff",
    pointBackgroundColor: "rgba(189,195,199,.4)"
    }
]
};

const config = {
type: "line",
data: dataaa,
options: {
    radius: 5,
    hitRadius: 30,
    hoverRadius: 12,
    responsive: true,
    animation: {
    // from https://www.chartjs.org/docs/latest/samples/animations/delay.html  --> Delay Tab
    onComplete: () => {
        delayed = true;
    },
    delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
    }
    },
    scales: {
    y: {
        ticks: {
        callback: function (value) {
            return "$" + value + "K";
        }
        }
    },
    x: {
        grid: {
          display: false
        }
      }
    }
}
};

const myChartSales = new Chart(ctxxx, config);