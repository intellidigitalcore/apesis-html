var dataa = {
  labels: ["16-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46-50","51-55","56-60","61-65","65+"],
  datasets: [{
    label: "Sales by ages",
    backgroundColor: "rgba(34,143,243)",
    borderColor: "rgba(34,143,243)",
    // borderWidth: 2,
    hoverBackgroundColor: "rgba(34,143,243)",
    hoverBorderColor: "rgba(34,143,243)",
    data: [65, 59, 20, 81, 56, 55, 40 ,70,22, 81, 56],
  }]
};

var optionss = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};

new Chart('chart', {
  type: 'bar',
  options: optionss,
  data: dataa
});