//API key - 1d446818-6afa-4f02-b5a0-a04d4b387665
//Chat-bot ID - ivE_zLmZMzZXKpY9y4ODP
let time;
let Dontfoods="";
let budget;
let userLocation;
let Milk=document.getElementById("Milk");
let Eggs = document.getElementById("Eggs");
let Fish=document.getElementById("Fish");
let Shellfish=document.getElementById("Shellfish");
let Nuts=document.getElementById("Nuts");
let Peanuts=document.getElementById("Peanuts");
let Wheat=document.getElementById("Wheat");
let Soybeans=document.getElementById("Soybeans");
let Sesame=document.getElementById("Sesame");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById("submitbutton").onclick = function(){
	const AllergyList=[];
	let userInput="pick a restaurant: Allergies: ";
	userLocation=document.getElementById("location").value;
	time = document.getElementById("Name").value;
	Dontfoods = document.getElementById("Dontfoods").value;
	budget = document.getElementById("Budget").value;;
	if(Milk&&Milk.checked==true){
		Milk=true
		AllergyList.push("Milk");
	}
	if(Eggs&&Eggs.checked==true){
		AllergyList.push("Eggs");
	}
	if(Fish&&Fish.checked==true){
		Fish=true
		AllergyList.push("Fish");
	}
	if(Shellfish&&Shellfish.checked==true){
		Shellfish=true
		AllergyList.push("Crustacean shellfish");
	}
	if(Nuts&&Nuts.checked==true){
		Nuts=true
		AllergyList.push("Tree Nuts");
	}
	if(Peanuts&&Peanuts.checked==true){
		Peanuts=true
		AllergyList.push("Peanuts");
	}
	if(Wheat&&Wheat.checked==true){
		Wheat=true
		AllergyList.push("Wheat");
	}
	if(Soybeans&&Soybeans.checked==true){
		Soybeans=true
		AllergyList.push("Soybeans");
	}
	if(Sesame&&Sesame.checked==true){
		Sesame=true
		AllergyList.push("Sesame");
	}
	if (AllergyList[0]==null){
		userInput+="None."
	}
	else {
		for (let i =0; i<AllergyList.length; i++) {
			userInput= userInput+(AllergyList[i])+", ";
		}
	}
	if (Dontfoods=="") {
		userInput+="Foods to avoid: None";
	}
	else {
		userInput+="Foods to avoid: "+Dontfoods;
	}
	userInput+=". My Budget is: "+budget+".";
	userInput+=" I am located at "+userLocation;
	userInput+=". I am willing to travel " + time+"minute radius";
	console.log(userInput);
	async function onClick1() {	
	const response = await fetch('https://www.chatbase.co/api/v1/chat', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer 1d446818-6afa-4f02-b5a0-a04d4b387665'
  },
  body: JSON.stringify({
    messages: [
      { content: 'How can I help you?', role: 'assistant' },
      { content: userInput, role: 'user' }
    ],
    chatbotId: 'ivE_zLmZMzZXKpY9y4ODP',
    stream: false,
    model: 'gpt-3.5-turbo',
    temperature: 0
  })
});
const data = await response.json();
document.getElementById("ResponseArea").innerHTML=data.text;
console.log(data);
};
onClick1();
}