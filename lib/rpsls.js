const rps_moves = ["rock", "paper", "scissors"]

export function RPS(playerMove) {
    if (!rps_moves.includes(playerMove)) {
        console.error(`${playerMove} is out of range.`);

         rules_RPS();
         help_RPS();
 
         return;
    }

    const randIndex = Math.floor(Math.random() * rps_moves.length);
    const computerMove = rps_moves[randIndex];

    if (playerMove == computerMove) { 
        return { 
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        };
    };

    if (
        (playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "scissors" && computerMove == "paper") ||
        (playerMove == "paper" && computerMove == "rock")
        ) { return {
                "player": playerMove,
                "opponent": computerMove,
                "result": "win"
            };
        } else {
            return {
                "player": playerMove,
                "opponent": computerMove,
                "result": "lose"
            };
        }

}

export function help_RPS() {
    const help = `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`;
    console.log(help);
    return;
}

export function rules_RPS() {
    const rules = `Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`;
    console.log(rules);
    return;
}


const rpsls_moves = ["rock", "paper", "scissors", "lizard", "spock"]

export function RPSLS(playerMove) {
    // first, check the validity of the player's move
    if (!rpsls_moves.includes(playerMove)) {
        console.error(`${playerMove} is out of range.`);

        // display help and rules, according to instructions
        rules_RPSLS();
        help_RPSLS();

        return;
    }

    // if the player's move is valid, proceed w the game
    // randomly generate the computer's move within the rps ruleset
    const randIndex = Math.floor(Math.random() * rpsls_moves.length);
    const computerMove = rpsls_moves[randIndex];

    // compare computer and player moves
    // tie
    if (playerMove == computerMove) {
        return { 
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        };
    };

    // player wins
    if (
        (playerMove == "rock" && (computerMove == "scissors" || computerMove == "lizard")) ||
        (playerMove == "scissors" && (computerMove == "paper" || computerMove == "lizard")) ||
        (playerMove == "paper" && (computerMove == "rock" || computerMove == "spock")) ||
        (playerMove == "lizard" && (computerMove == "paper" || computerMove == "spock")) ||
        (playerMove == "spock" && (computerMove == "rock" || computerMove == "scissors"))
        ) { return {
                "player": playerMove,
                "opponent": computerMove,
                "result": "win"
            };
        } else {
            return {
                "player": playerMove,
                "opponent": computerMove,
                "result": "lose"
            };
        }

}

export function help_RPSLS() {
    // print command help
    const help = `Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`;
    console.log(help);
    return;
}

export function rules_RPSLS() {
    // print rules for regular rps
    const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;
    console.log(rules);
    return;
}
