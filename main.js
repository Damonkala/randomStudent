var students = [];
var teaming = [];
var teamingX = [];
var randoTeams;
var names;
var teamInput = document.getElementById('teamNumber');
//var x = document.getElementById('teamNumber');
document.getElementById('addButton').addEventListener('click', addStudent);
var studentNameInput = document.getElementById('studentName');
studentNameInput.addEventListener('keypress', keyPressed)

studentNameInput.focus();
// teamInput.focus();

function keyPressed(event) {
	if(event.charCode === 13) {
		addStudent();
	}
}
var div, parentDiv = document.createElement("div");
function addStudent(){
	var inputStr = studentNameInput.value;
	if (inputStr){
		names = inputStr.trim().split(',');
		names = names.map(function(name){
			return name.trim();
		})
		names = names.filter(function(name){
			return name;
		})

		students = students.concat(names);
		teaming = teaming.concat(names);
		teamingX = teamingX.concat(names);
		//students.push(studentName);
		names.forEach(function cb(element){
		studentNameInput.value = '';
		studentNameInput.focus();
		div = document.createElement("div");
		div.textContent = element;
		document.getElementById("nameContainer").appendChild(div);
})

	}
};
document.body.appendChild(parentDiv);



document.getElementById('pickRandom').addEventListener('click', randomStudent);
document.getElementById('makeTeamOfTwo').addEventListener('click', createTeamOfTwo);
document.getElementById('makeTeam').addEventListener('click', createTeamOfX);

function randomStudent() {
	randomizedName.removeChild(randomizedName.lastChild);
	var rand = students[Math.floor(Math.random() * students.length)];
	console.log(rand);
	rando = document.createElement("div");
	rando.textContent = rand;
	document.getElementById('randomizedName').appendChild(rando);
}

function createTeamOfTwo() {
	document.getElementById('teamOfTwo').innerHTML = "";
		teaming = teaming.sort(function() {
		  return  .5 - Math.random();
		  });
				while(teaming.length) {
						var studentTeams = (teaming.splice(0,2));
						console.log(studentTeams);
						team = document.createElement('div');
						team.textContent = studentTeams;
						document.getElementById('teamOfTwo').appendChild(team);
						console.log(teaming.length);
				 }
				 		teaming = teaming.concat(names);

	}
	// function createTeamOfX() {
	// 	document.getElementById('customTeam').innerHTML = "";
	// 	teamingX = teamingX.sort(function() {
	// 	  return  .5 - Math.random();
	// 	  });
	// 			while(teamingX.length) {
	// 				var teamVar = teamInput.input;
	// 					console.log(teamInput);
	// 					var studentTeams = (teamingX.splice(0,teamVar));
	// 					console.log(studentTeams);
	// 					team = document.createElement('div');
	// 					team.textContent = studentTeams;
	// 					document.getElementById('customTeam').appendChild(team);
	// 					console.log(teamingX.length);
	// 			 }
	// 			 		teamingX = teamingX.concat(names);
	// 	}
			//var randoTeams = studentTeams[Math.floor(Math.random() * teaming.length)];
			// console.log(teaming);
			// console.log(studentTeams);
			// console.log(randoTeams);
