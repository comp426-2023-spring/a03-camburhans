#!/usr/bin/evn node

import { rpsls } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

function help_message() {
	console.log("Usage: node-rpsls [SHOT]");
	console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!");
	console.log("");
	console.log("  -h, --help	display this help message and exit");
	console.log("  -r, --rule	display the rules and exit");
	console.log("");
	console.log("Examples:");
	console.log("  node-rpsls	Return JSON with single player RPSLS result.");
	console.log("			e.g. {'player':'rock'}");
	console.log("  node-rpsls rock	Return JSON with results for RPSLS played against a simulated opponent.");
	console.log("			e.g. {'Player':'rock','opponent':'Spock','result':'lose'}");
}

function rules_message() {
	console.log("  - Scissors CUTS Paper");
	console.log("  - Paper COVERS Rock");
	console.log("  - Rock SMOOSHES Scissors");
	console.log("  - Lizard POISONS Spock");
	console.log("  - Spock SMASHES Scissors");
	console.log("  - Scissors DECAPITATES Lizard");
	console.log("  - Lizard EATS Paper");
	console.log("  - Paper DISPROVES Spock");
	console.log("  - Spock VAPORIZES Rock");
	console.log("  - Rock CRUSHES Scissors");
}

if (args.h || args.help) {
	help_message();
	process.exit(0);
}
else if (args.r || args.rule) {
	rules_message();
	process.exit(0);
}

let player_input = args._[0];
try {
	console.log(JSON.stringify(rpsls(player_input)));
}
catch(error) {
	help_message();
	rules_message();
}