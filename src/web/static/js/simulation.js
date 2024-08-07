const ctx = document.getElementById("lineChart")
const currentPointInput = document.getElementById("current-point")
const monthlyGetPointInput = document.getElementById("monthly-get-point")


const getAdjustedMonth = (month) => {
    return ((month - 1) % 12) + 1;
}

// 月の取得
const today = new Date()
const thisMonth = today.getMonth() + 1


// 目標ポイント
const goalPoint = 2500
const goalPointChart = Array(6).fill(goalPoint)

// 初期状態のグラフ
const initPoint = 0
const initPointChart = Array(6).fill(initPoint)

// 今、1、3、半年、1年後

let myLineChart = new Chart(ctx, {
    type: 'bar', // 最初のデフォルトのタイプを設定
    data: {
        labels: [
            "今",
            "1ヶ月後",
            "3ヶ月後",
            "半年後",
            "1年後",
            // getAdjustedMonth(thisMonth + 5)
        ],
        datasets: [
       {
            label: '目標',
            type: 'line',
            data: goalPointChart,
            pointRadius: 0,
            borderColor: "rgba(255,0, 0, 1)",
            backgroundColor: "rgba(0,0,0,0)",
        },
        {
            label: '獲得予定ポイント',
            type: 'bar',
            data: initPointChart,
            borderColor: [
                "rgba(255, 219, 32, 1)", // thisMonth
                "rgba(245, 124, 28, 1)", // thisMonth + 1
                "rgba(245, 124, 28, 1)", // thisMonth + 2 (特定の色)
                "rgba(245, 124, 28, 1)", // thisMonth + 3
                "rgba(245, 124, 28, 1)", // thisMonth + 4
                "rgba(245, 124, 28, 1)", // thisMonth + 5
            ],
            backgroundColor: [
                "rgba(255, 219, 32, 1)", // thisMonth
                "rgba(245, 124, 28, 1)", // thisMonth + 1
                "rgba(245, 124, 28, 1)", // thisMonth + 2 (特定の色)
                "rgba(245, 124, 28, 1)", // thisMonth + 3
                "rgba(245, 124, 28, 1)", // thisMonth + 4
                "rgba(245, 124, 28, 1)", // thisMonth + 5
            ],
            borderWidth: 2
        }
        ],
    },
    options: {
        responsive: true, 
        title: {
            display: false,
            text: 'ポイント獲得予定'
        },
        scales: {
        yAxes: [{
            ticks: {
            suggestedMax: 5000,
            suggestedMin: 0,
            callback: function(value, index, values){
                return  value +  ''
            }
            }
            }]
            
        },
        legend: {
            display: false // ラベルを非表示にする
        }
    }
})

// inputタグの値が変更されたときに値を表示
currentPointInput.addEventListener("input", () => {
    const currentPoint = currentPointInput.value;
    const monthlyPoint = monthlyGetPointInput.value;

    // myLineChart.data.datasets[1].data = [0, 600, 1200, 1800, 2400, 3000, 3600].map((val, idx) => Number(monthlyPoint)* idx + Number(currentPoint));
    myLineChart.data.datasets[1].data = [0, 0, 0, 0, 0].map((val, idx) => {
        let updateVal = 0;
        switch (idx) {
        case 0:
            updateVal = Number(currentPoint)
            break
        case 1:
            updateVal = Number(monthlyPoint) * 1 + Number(currentPoint)
            break    
        case 2:
            updateVal = Number(monthlyPoint) * 3 + Number(currentPoint)
            break
        case 3:
            updateVal = Number(monthlyPoint) * 6 + Number(currentPoint)
            break
        default:
            updateVal = Number(monthlyPoint) * 12 + Number(currentPoint)
            break   
        }
        return updateVal
    })
    myLineChart.update()
})

monthlyGetPointInput.addEventListener("input", () => { 
    const monthlyPoint = monthlyGetPointInput.value;
    const currentPoint = currentPointInput.value;

    // myLineChart.data.datasets[1].data = [0, 600, 1200, 1800, 2400, 3000, 3600].map((val, idx) => Number(monthlyPoint)* idx + Number(currentPoint));
    myLineChart.data.datasets[1].data = [0, 0, 0, 0, 0].map((val, idx) => {
        let updateVal = 0;
        switch (idx) {
        case 0:
            updateVal = Number(currentPoint)
            break
        case 1:
            updateVal = Number(monthlyPoint) * 1 + Number(currentPoint)
            break    
        case 2:
            updateVal = Number(monthlyPoint) * 3 + Number(currentPoint)
            break
        case 3:
            updateVal = Number(monthlyPoint) * 6 + Number(currentPoint)
            break
        default:
            updateVal = Number(monthlyPoint) * 12 + Number(currentPoint)
            break   
        }
        return updateVal
    })
    myLineChart.update()

})