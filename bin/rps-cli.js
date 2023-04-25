#!/usr/bin/env node

import { rps } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

function help_message() {
	console.log("Usage: node-rps [SHOT]");
	console.log("Play Rock Paper Scissors (RPS)");
	console.log("");
	console.log("  -h, --help	display this help message and exit");
	console.log("  -r, --rule	display the rules and exit");
	console.log("");
	console.log("Examples:");
	console.log("  node-rps		Return JSON with single player RPS result.");
	console.log("			e.g. {'player':'rock'}");
	console.log("  node-rps rock	Return JSON with results for RPS played against a simulated opponent.");
	console.log("			e.g. {'player':'rock','opponent':'scissors', 'result':'win'}");
}
function rules_message() {
	console.log("Rules for Rock Paper Scissors");
	console.log("");
	console.log("  - Scissors CUTS Paper");
	console.log("  - Paper COVERS Rock");
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
	console.log(JSON.stringify(rps(player_input)));
}
catch(error) {
	help_message();
	rules_message();
}