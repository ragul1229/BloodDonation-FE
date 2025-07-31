/*Script for Registration.html*/

function SttoDis(St, Dis)
{
	var St = document.getElementById(St);
	var Dis = document.getElementById(Dis);

	Dis.innerHTML = "";

	if (St.value == "Andhra Pradesh") 
	{
		var opArray = ["|Now select District", "Krishna|Krishna", "Others|Others"];
	} 
	else if (St.value == "Others") 
	{
		var opArray = ["|Now select District", "Others|Others"];
	}

	for (var option in opArray) 
	{
		var pair = opArray[option].split("|");
		var newOp = document.createElement("option");
		newOp.value = pair[0];
		newOp.innerHTML = pair[1];
		Dis.options.add(newOp);
	}
}

function DistoDiv(Dis, Div) 
{
	var Dis = document.getElementById(Dis);
	var Div = document.getElementById(Div);

	Div.innerHTML = "";

	if (Dis.value == "Krishna") 
	{
		var opArray = [
		"|Now select Division",
		"Machilipatnam|Machilipatnam Division",
		"Gudivada|Gudivada Division",
		"Vijayawada|Vijayawada Division",
		"Nuzvid|Nuzvid Division",
		];
	} 
	else if (Dis.value == "Others") 
	{
		var opArray = ["|Now select Division", "Others|Others"];
	}

	for (var option in opArray) 
	{
		var pair = opArray[option].split("|");
		var newOp = document.createElement("option");
		newOp.value = pair[0];
		newOp.innerHTML = pair[1];
		Div.options.add(newOp);
	}
}

function DivtoMan(Div, Man) 
{
	var Div = document.getElementById(Div);
	var Man = document.getElementById(Man);

	Man.innerHTML = "";

	if (Div.value == "Machilipatnam") 
	{
		var opArray = [
		"|Now select Mandal",
		"avanigadda|Avanigadda",
		"bantumilli|Bantumilli",
		"challapalli|Challapalli",
		"ghantasala|Ghantasala",
		"guduru|Guduru",
		"koduru|Koduru",
		"kruthivennu|Kruthivennu",
		"machilipatnam|Machilipatnam",
		"mopidevi|Mopidevi",
		"movva|Movva",
		"nagayalanka|Nagayalanka",
		"pedana|Pedana",
		"unguturu|Unguturu",
		];
	} 
	else if (Div.value == "Gudivada") 
	{
		var opArray = [
		"|Now select Mandal",
		"gudivada|Gudivada",
		"gudlavalleru|Gudlavalleru",
		"kaikaluru|Kaikaluru",
		"kalidindi|Kalidindi",
		"mandavalli|Mandavalli",
		"mudinepalli|Mudinepalli",
		"nandivada|Nandivada",
		"pamarru|Pamarru",
		"pedaparupudi|Pedaparupudi",
		];
	} 
	else if (Div.value == "Vijayawada") 
	{
		var opArray = [
		"|Now select Mandal",
		"chandarlapadu|Chandarlapadu",
		"g-Konduru|G.Konduru",
		"ibrahimpatnam|Ibrahimpatnam",
		"jaggayyapeta|Jaggayyapeta",
		"kanchikacherla|Kanchikacherla",
		"kankipadu|Kankipadu",
		"mylavaram|Mylavaram",
		"nandigama|Nandigama",
		"penamaluru|Penamaluru",
		"penuganchiprolu|Penuganchiprolu",
		"thotlavalluru|Thotlavalluru",
		"vatsavai|Vatsavai",
		"veerullapadu|Veerullapadu",
		"vijayawada-rural|Vijayawada (rural)",
		"vijayawada-east|Vijayawada East",
		"vijayawada-central|Vijayawada Central",
		"vijayawada-north|Vijayawada North",
		"vijayawada-west|Vijayawada West",
		];
	} 
	else if (Div.value == "Nuzvid") 
	{
		var opArray = [
		"|Now select Mandal",
		"a-Konduru|A.Konduru",
		"agiripalli|Agiripalli",
		"bapulapadu|Bapulapadu",
		"chatrai|Chatrai",
		"gampalagudem|Gampalagudem",
		"gannavaram|gannavaram",
		"musunuru|Musunuru",
		"nuzvid|Nuzvid",
		"pamidimukkala|Pamidimukkala",
		"reddigudem|Reddigudem",
		"tiruvuru|Tiruvuru",
		"unguturu|Unguturu",
		"vissannapeta|Vissannapeta",
		"vuyyuru|Vuyyuru",
		];
	} 
	else if (Div.value == "Others") 
	{
		var opArray = ["|Now select Mandal", "Others|Others"];
	}

	for (var option in opArray) 
	{
		var pair = opArray[option].split("|");
		var newOp = document.createElement("option");
		newOp.value = pair[0];
		newOp.innerHTML = pair[1];
		Man.options.add(newOp);
	}
}

function Validate() 
{
	var St = document.getElementById('state');
	var Dis = document.getElementById('district');
	var Div = document.getElementById('division');
	var Man = document.getElementById('mandal');
	
	if (St.value == "" || Dis.value == "" || Div.value == "" || Man.value == "") 
	{
		alert("Kindly fill in all the fields to proceed further...");
		RegistrationForm.reset();
	}
}

