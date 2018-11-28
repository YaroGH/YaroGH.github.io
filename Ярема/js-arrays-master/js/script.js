/*писати код тут*/

let mondayLessons=[
	['Інформатика','6-Б'],
	[' Математика','7-А'],
	[' Фізика','8'],
	[' Історія','9-А'],
	[' Хімія','10'],
	[' Фізкультура','11']
	];
let tuesdayLessons=[
	['-','-'],
	['Інформатика','9-Б'],
	['-','-'],
	['Інформатика','9-А'],
	['-','-'],
	['Інформатика','8']
	];
let wednesdayLessons=[
	['-','-'],
	['Інформатика','5-Б'],
	['Інформатика','4-А'],
	['Інформатика','4-Б'],
	['Інформатика','5-А'],
	['-','-']
	];
let thursdayLessons=[
	['-','-'],
	['-','-'],
	['Інформатика','3-Б'],
	['Інформатика','7-Б'],
	['Інформатика','3-А'],
	['Інформатика','7-А']
	];
let fridayLessons=[
	['-','-'],
	['-','-'],
	['Інформатика','8'],
	['Інформатика','9-А'],
	['Інформатика','9-б'],
	['-','-']
	];
let weekdayLessons=[mondayLessons,tuesdayLessons,wednesdayLessons,thursdayLessons,fridayLessons];
let dayID=['monday_lessons','tuesday_lessons','wednesday_lessons','thursday_lessons','friday_lessons'];

for (let j = 0; j < weekdayLessons.length; j++){

	let newOl=document.createElement('ol');
	for (let i = 0; i < 6; i++) {
			var newLi = document.createElement('li');
			newLi.innerHTML = "Урок:"+weekdayLessons[j][i][0]+" Клас: "+weekdayLessons[j][i][1];
			newOl.appendChild(newLi);
			// console.log(newLi);
	}
	console.log(newOl);
	let qwer=document.getElementById(dayID[j]);
	qwer.innerHTML=newOl.innerHTML;

}

	



	// let mondayLessons=['Інформатика',' Математика',' Фізика',' Історія',' Хімія',' Фізкультура'];
	// let oElement=document.getElementById("monday-lessons");
	// let tempElement;
	// for (let i=0;i<mondayLessons.length;i++){
	// 	tempElement+=mondayLessons[i]+"<br>";
	// }
	// oElement.innerHTML=tempElement;