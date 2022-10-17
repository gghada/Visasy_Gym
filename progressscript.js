const chart = document.querySelector("#chart").getContext('2d');

//Gradient labels 
let grad = chart.createLinearGradient(0, 0, 0, 400);
grad.addColorStop(0, "rgba(52,146,233,1)");
grad.addColorStop(1, "rgba(52,146,233,0.01)");

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: "% Training done",
                data: [0, 15, 5, 23, 40, 56, 90],
                
                borderWidth: 2,
                fill: true,
                backgroundColor: grad,
            }
            
        ]
    },
    options: {
        responsive: true,
        scales:{
            y:{
                ticks:{
                    callback: function(value){
                        return  value + ' %';
                    }
                }
            }
        }
    }
});

const ctx = document.getElementById('Mychart').getContext('2d');

//Gradient labels 
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(231,67,95,1)");
gradient.addColorStop(1, "rgba(231,67,95,0.01)");

const labels = [
    'Mon',
    'Tue',
    'Wed', 
    'Thu', 
    'Fri', 
    'Sat', 
    'Sun',

];

const data = {
    labels,
    datasets: [{
        data: [120, 132, 125, 144, 200, 180, 230 ],
        label: 'Calories',
        fill: true,
        backgroundColor: gradient, 
    
    },
    ],
};

const config = {
    type: 'line',
    data: data,
    options:{
        responsive: true,
        scales:{
            y:{
                ticks:{
                    callback: function(value){
                        return  value + ' Kcal';
                    }
                }
            }
        }
    },
};

const Mychart = new Chart(ctx, config);