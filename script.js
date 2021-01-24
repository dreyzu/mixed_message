//function to pick a word from array
function generateRandomNumber(num) {
	return Math.floor(Math.random() * num);
}

const coolMessageParts = {
	jobSelect: ["sommelier", "chef", "teacher", "thief", "pet food tester"],
	fortuneMessage: [
		"a terrible day",
		"a bad day",
		"an ok day",
		"a good day",
		"a great day",
	],
	advice: [
		"go out and party",
		"eat something",
		"play a video game",
		"not read this",
		"have fun",
	],
};

let personalMessage = [];

//Iterate over the object
for (let prop in coolMessageParts) {
	let optionIndex = generateRandomNumber(coolMessageParts[prop].length);
	// use the object's properties to customize the message being added to personalWisdom
	switch (prop) {
		case "jobSelect":
			personalMessage.push(
				`Your job right now is "${coolMessageParts[prop][optionIndex]}".`
			);
			break;
		case "fortuneMessage":
			personalMessage.push(
				`You are having: "${coolMessageParts[prop][optionIndex]}".`
			);
			break;
		case "advice":
			personalMessage.push(
				`You should: "${coolMessageParts[prop][optionIndex]}".`
			);
			break;
		default:
			personalMessage.push("We do not have enough info :( sorry.");
	}
}

function formatMessage(message) {
	const formatted = personalWisdom.join("\n");
	console.log(formatted);
}

formatMessage(personalMessage);
