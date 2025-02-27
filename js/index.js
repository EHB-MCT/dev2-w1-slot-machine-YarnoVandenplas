import { slotMachine } from "./slotMachine.js";
function init() {
	console.log("Init");
	//  log the document using console.log to test if you can get access to it -> check
	// log the submit button. If that works, store that button in a variable
	const Pull = document.querySelector("#button");
	// attach an event listener to that button and show a log "button clicked"
	//  if the submit button is clicked, the lever is pulled (= call that function)
	Pull.addEventListener("click", function () {
		pullLever();
	});
}

function pullLever() {
	// reset the machine (you may skip this step for now, and focus on getting the machine to work first)
	// spin the slot machine
	slotMachine.spin();
	showSlots();
	showGameResult();
	slotMachine.reset();
}

function showSlots() {
	let slots = "";
	for (let i = 0; i < slotMachine.slots.length; i++) {
		slots +=
			'<span class="' +
			slotMachine.slots[i] +
			'">' +
			slotMachine.slots[i] +
			"</span>";
	}
	document.querySelector("#result").innerHTML = slots;
}

function showGameResult() {
	slotMachine.calculateStatus();
	if (slotMachine.win) {
		document.querySelector("#status").innerHTML = "<p>JE WINT 🎉💰</p>";
	} else {
		document.querySelector("#status").innerHTML = "<p>JE VERLIEST 😭🥺</p>";
	}
}

init();
