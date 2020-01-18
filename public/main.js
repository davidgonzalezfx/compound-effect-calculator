let myDataSet = [];
document.getElementById("btn").addEventListener("click", function () {
	calc();
});

document.getElementById("btn2").addEventListener("click", function(){
	myDataSet = new Array();
	myChart.data.labels = [];
	myChart.data.datasets[0].data = [];
	myChart.update();
	calc();
	document.getElementById('graph').style.display = "flex";
	delData();
	insertData();	
	for (let i = 0; i < myDataSet.length; i++) {
		myChart.data.labels[i] = i + 1;
		myChart.data.datasets[0].data[i] = myDataSet[i];
		myChart.update();
	}
})

function calc(){
	let 
	investment = parseInt(document.getElementById('investment').value), 
	interest = parseInt(document.getElementById('interest').value),
	time = parseInt(document.getElementById('period').value),
	regular = parseInt(document.getElementById('regular').value),
	total;

	
	if(regular > 0) {
		console.log("2.0")
		let newT = investment
		for(let i=0; i<time; i++) {
		  newT += regular //make addition at the beginin
			console.log(`${i+1} : ${newT += newT*interest*0.01}`)
			myDataSet.push(newT);
		  //newT += regular //make addition at the end
		}
		total = newT
	} else {
		console.log("Normal")
		total = investment*(1+interest*0.01)**time
		let newT = investment
		for(let i=0; i<time; i++) {
			console.log(`${i+1} : ${newT += newT*interest*0.01}`)
			myDataSet.push(newT);
		}
	}
	document.getElementById("math").innerHTML = "$ " + total.toFixed(2);
}

function delData() {
	const tbody = document.getElementById('tbod');
	tbody.innerHTML = "";
}

function insertData() {
	let 
	investment = parseInt(document.getElementById('investment').value), 
	interest = parseInt(document.getElementById('interest').value),
	time = parseInt(document.getElementById('period').value),
	regular = parseInt(document.getElementById('regular').value)
	let table = document.getElementById('tbod');
	let newT = investment;

	for(let i=0; i<time; i++) {
		let rowX = table.insertRow(-1)
		rowX.insertCell(-1).innerHTML = i+1 //Month
		if(regular>0) {newT+=regular}
		rowX.insertCell(-1).innerHTML = newT.toFixed(2) //Prevous
		rowX.insertCell(-1).innerHTML = interest + " %" //interest
		newT += newT*interest*0.01
		rowX.insertCell(-1).innerHTML = newT.toFixed(2) //profit
	}
		
}


	var ctx = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(ctx, {
			type: 'line',
					data: {
						datasets: [{
							backgroundColor: 'rgba(9,46,80,1)',
							borderColor: 'rgb(255,255,255)',
						}]
					},
					options: {
						responsive: true,
						legend: {display: false},
						scales: {
							xAxes: [{
								gridLines: { color: "#6C757D"}
							}],
							yAxes: [{
								gridLines: { color: "#6C757D" }
							}]
						},
						tooltips: {
							mode: 'point',
							bodyFontSize: 15,
							titleFontSize: 15,
							borderColor: 'rgb(0,123,255)',
							borderWidth: 2,
						}	
					}
	});

	
	