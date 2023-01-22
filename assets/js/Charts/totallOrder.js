var ctxx = document.getElementById("myChart");
var myChartt = new Chart(ctxx, {
type: 'doughnut',
data: {
    labels: ['Complete Order', 'Cancel Order', 'Pending Order'],
    datasets: [{
    data: [60, 30, 12],
    backgroundColor: [
        'rgba(34, 143, 243, 1)',
        'rgba(235, 107, 67, 1)',
        'rgba(0, 0, 0, 0.2)',
    ],
    borderRadius: 6,
    borderWidth: 4
    }]
},
options: {
    plugins: {
            legend: {
                display: true,
                position : 'bottom',
                labels: {
                    color: 'rgb(33, 33, 33)',
                }
            }
        },
    cutoutPercentage: 50,
    responsive: false,
    hoverOffset: 4,
}
});
