function randomItem(obj) {
    const items = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[~~randomIndex];
}

const rpsRules = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
};