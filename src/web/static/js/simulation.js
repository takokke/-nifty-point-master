const ctx = document.getElementById("lineChart")

const getAdjustedMonth = (month) => {
    return ((month - 1) % 12) + 1;
}

// 月の取得
const today = new Date()
const thisMonth = today.getMonth() + 1


// 目標ポイント
const goalPoint = 2500
const goalPointChart = Array(8).fill(goalPoint)


let myLineChart = new Chart(ctx, {
type: 'line',
data: {
    labels: [
        thisMonth,
        getAdjustedMonth(thisMonth + 1),
        getAdjustedMonth(thisMonth + 2),
        getAdjustedMonth(thisMonth + 3),
        getAdjustedMonth(thisMonth + 4),
        getAdjustedMonth(thisMonth + 5),
        getAdjustedMonth(thisMonth + 6)
    ],
    datasets: [
    {
        label: '獲得予定ポイント',
        data: [0, 600, 1200, 1800, 2400, 3000, 3600, 4200],
        borderColor: "rgba(255,0,0, 1)",
        backgroundColor: "rgba(0,0,0,0)"
     },
    {
        label: '目標',
        data: goalPointChart,
        borderColor: "rgba(0,0,255, 0.4)",
        backgroundColor: "rgba(0,0,0,0)"
    }
    ],
},
options: {
    title: {
    display: true,
    text: 'ポイント獲得予定'
    },
    scales: {
    yAxes: [{
        ticks: {
        suggestedMax: 5000,
        suggestedMin: 0,
        stepSize: 1000,
        callback: function(value, index, values){
            return  value +  'pt'
        }
        }
    }]
    },
}
})