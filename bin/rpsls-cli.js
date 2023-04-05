#!/usr/bin/env node
import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

let args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log('Usage: node-rpsls [SHOT]' +
    '\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!' +
    '\n\n\t-h, --help      display this help message and exit' +
    '\n\t-r, --rules     display the rules and exit' +
    '\n\nExamples:' +
    '\n\tnode-rpsls        Return JSON with single player RPSLS result.' +
                      '\n\t\te.g. {"player":"rock"}'+
    '\n\tnode-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.' +
                      '\n\t\te.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);

}

if (args.r || args.rules) {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:' +
    '\n\n\t- Scissors CUTS Paper' +
    '\n\t- Paper COVERS Rock' +
    '\n\t- Rock SMOOSHES Lizard' +
    '\n\t- Lizard POISONS Spock' +
    '\n\t- Spock SMASHES Scissors' +
    '\n\t- Scissors DECAPITATES Lizard' +
    '\n\t- Lizard EATS Paper' +
    '\n\t- Paper DISPROVES Spock' +
    '\n\t- Spock VAPORIZES Rock' +
    '\n\t- Rock CRUSHES Scissors');
    process.exit(0);
}

let move = args._[0]
let output = rpsls(move)

if (output === 'error') {
    console.error(`${move} is out of range.`);

    console.log('Usage: node-rpsls [SHOT]' +
    '\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!' +
    '\n\n\t-h, --help      display this help message and exit' +
    '\n\t-r, --rules     display the rules and exit' +
    '\n\nExamples:' +
    '\n\tnode-rpsls        Return JSON with single player RPSLS result.' +
                      '\n\t\te.g. {"player":"rock"}'+
    '\n\tnode-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.' +
                      '\n\t\te.g {"player":"rock","opponent":"Spock","result":"lose"}');

    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:' +
    '\n\n\t Scissors CUTS Paper' +
    '\n\t Paper COVERS Rock' +
    '\n\t Rock SMOOSHES Lizard' +
    '\n\t Lizard POISONS Spock' +
    '\n\t Spock SMASHES Scissors' +
    '\n\t Scissors DECAPITATES Lizard' +
    '\n\t Lizard EATS Paper' +
    '\n\t Paper DISPROVES Spock' +
    '\n\t Spock VAPORIZES Rock' +
    '\n\t Rock CRUSHES Scissors');

    process.exit(1);
} else {
    console.log(JSON.stringify(output));
}