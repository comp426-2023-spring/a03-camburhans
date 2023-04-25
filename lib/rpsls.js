export function rps(shot) {
	const options = ["rock", "paper", "scissors"]
	const win_conditions = {"rock": "scissors", "paper": "rock", "scissors": "paper"}
	
	if (shot === undefined) {
        	return {"player": options[Math.floor(Math.random() * 3)]};
	}

	shot = shot.toLowerCase();

	if (options.includes(shot) == false) {
		throw new Error();
	}

	const shot2 = options[Math.floor(Math.random() * 3)];

	if (shot == shot2) {
		return {player: shot, opponent: shot2, result: "tie"}
	}
	else if (win_conditions[shot] == shot2) {
		return {player: shot, opponent: shot2, result: "win"}
	}
	else {
		return {player: shot, opponent: shot2, result: "lose"}
	}
}

export function rpsls(shot) {
	const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

	const win_conditions = {"rock": ["scissors", "lizard"], "paper": ["rock", "spock"], "scissors": ["paper", "lizard"], "lizard": ["paper", "spock"], "spock": ["rock", "scissors"]};
	
	if (shot === undefined) {
        return {"player": options[Math.floor(Math.random() * 5)]};
    }

	shot = shot.toLowerCase();

	if (options.includes(shot) == false) {
        throw new Error();
    }

	const shot2 = options[Math.floor(Math.random() * 5)]

	if (shot == shot2) {
        return {player: shot, opponent: shot2, result: "tie"}
    }
    else if (win_conditions[shot].includes(shot2)) 
	{
        return {player: shot, opponent: shot2, result: "win"}
    }
    else {
        return {player: shot, opponent: shot2, result: "lose"}
    }
}