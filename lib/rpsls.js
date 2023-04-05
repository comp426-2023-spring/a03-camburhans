function randomItem(obj) {
    const items = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[~~randomIndex];
}

const RPS = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
};

export function rps(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomItem(RPS)};
    }

    let lowerCaseShot = playerShot.toLowerCase();
    if (!(lowerCaseShot in RPS)) {
        console.log(
            `Rules for Rock Paper Scissors:
                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock CRUSHES Scissors
            `
        );
        process.exit(1);
    }

    let opponentShot = randomItem(RPS);
    let result = RPS[lowerCaseShot].includes(opponentShot.toLowerCase()) ? "lose" : "win";
    if (lowerCaseShot == opponentShot) result = "tie";

    return {"player": playerShot, "opponent": opponentShot, "result": result};
}

const RPSLS = {
    "rock": ["paper", "spock"],
    "paper": ["scissors", "lizard"],
    "scissors": ["rock", "spock"],
    "spock": ["lizard", "paper"],
    "lizard": ["rock", "scissors"]
};