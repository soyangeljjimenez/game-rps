const choicesDisplay = document.querySelector('#choices')
const resultDisplay = document.querySelector('#result')

const choices = ['Rock', 'Paper', 'Scissors']

const getResult = (userChoice, computerChoice)=>{
	switch (userChoice+computerChoice) {
		case 'ScissorsPaper':
		case 'RockScissors':
		case 'PapeRock':
			resultDisplay.innerHTML = 'You chose '+userChoice+' and computer chose '+computerChoice+' so <b>you WIN!</b>'
			break;
		case 'PaperScissors':
		case 'ScissorsRock':
		case 'RockPaper':
			resultDisplay.innerHTML = 'You chose '+userChoice+' and computer chose '+computerChoice+' so <b>you LOSE!</b>'
			break;
		case 'RockRock':
		case 'PaperPaper':
		case 'ScissorsScissors':
			resultDisplay.innerHTML = 'You chose '+userChoice+' and computer chose '+computerChoice+' so it\'s a <b>DRAW!</b>'
			break;
	}
}

const handleClick = (e)=>{
	const userChoice = e.target.innerHTML
	const computerChoice = choices[Math.floor(Math.random()*choices.length)]
	getResult(userChoice, computerChoice)
}

choices.forEach(choice => {
	const button = document.createElement('button')
	button.innerHTML = choice
	button.addEventListener('click', handleClick)
	choicesDisplay.appendChild(button)
});