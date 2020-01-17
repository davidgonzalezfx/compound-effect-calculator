document.getElementById("btn").addEventListener("click", function () {
	calc();
});

document.getElementById("btn2").addEventListener("click", function(){
	calc();
	document.getElementById('graph').style.display = "table";
	delData();
	insertData();
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
		  //newT += regular //make addition at the end
		}
		console.log(`Total: ${newT}`)
		total = newT
	} else {
		console.log("Normal")
		total = investment*(1+interest*0.01)**time
		let newT = investment
		for(let i=0; i<time; i++) {
		  console.log(`${i+1} : ${newT += newT*interest*0.01}`)
		}
	}
  
	document.getElementById("math").innerHTML = "$ " + total.toFixed(2);
}

function delData() {
	document.getElementById('graph').innerHTML="";
}

function insertData() {
	let 
	investment = parseInt(document.getElementById('investment').value), 
	interest = parseInt(document.getElementById('interest').value),
	time = parseInt(document.getElementById('period').value),
	regular = parseInt(document.getElementById('regular').value)
	let table = document.getElementById('graph');
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