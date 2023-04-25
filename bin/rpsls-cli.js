#!/usr/bin/env node

import { rps } from "../lib/rpsls.js"
import minimist from 'minimist';

var args = minimist(process.argv.slice(2));

function print_help() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
}

function print_rules() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
}

if (args.h || args.help) {
    print_help();
    process.exit(0);
}

if (args.r || args.rules) {
    print_rules();
    process.exit(0);
}

let player_shot = args._[0];

try {
    console.log(JSON.stringify(rps(player_shot)));
    process.exit(0);
}
catch (e) {
    print_help();
    print_rules();
    process.exit(0);
}