let r=75;//=document.getElementById("radius").value;

const pi=3.14;
//r=document.getElementById("radius").Value;
function s(r) {
	return pi*r*r;// body...
}
function showAnswer(){ 

	document.getElementById("answer").innerHTML ="Площа круга з радіусом "+r+' дорівнює '+s(r);
	//alert(r);
}
function showNumbers(){
	for (let i = 12; i <123; i++) {
		var newLi = document.createElement('li');
		newLi.innerHTML = "Число: "+i;
		numbers.appendChild(newLi);
}
}


  