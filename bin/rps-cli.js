#!/usr/bin/env node
import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

let args = minimist(process.argv.slice(2));

//help
if (args.h || args.help) {
    console.log('Usage: node-rps [SHOT]' +
    '\nPlay Rock Paper Scissors (RPS)' +
    '\n\n\t-h, --help      display this help message and exit' +
    '\n\t-r, --rules     display the rules and exit' +
    '\n\nExamples:' +
    '\n\tnode-rps        Return JSON with single player RPS result.' +
                      '\n\t\te.g. {"player":"rock"}'+
    '\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.' +
                      '\n\t\te.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0);
} 

//rules
if (args.r || args.rules) {
    console.log('Rules for Rock Paper Scissors:' +
    '\n\n\t- Scissors CUTS Paper' +
    '\n\t- Paper COVERS Rock' +
    '\n\t- Rock CRUSHES Scissors');
    process.exit(0);
} 

let move = args._[0]
let output = rps(move)

if (output === 'error') {
    console.error(`${move} is not real.`);

    console.log('Usage: node-rps [SHOT]' +
    '\nPlay Rock Paper Scissors (RPS)' +
    '\n\n\t-h, --help      display this help message and exit' +
    '\n\t-r, --rules     display the rules and exit' +
    '\n\nExamples:' +
    '\n\tnode-rps        Return JSON with single player RPS result.' +
                      '\n\t\te.g. {"player":"rock"}'+
    '\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.' +
                      '\n\t\te.g {"player":"rock","opponent":"scissors","result":"win"}');

    console.log('Rules for Rock Paper Scissors:' +
    '\n\n\t- Scissors CUTS Paper' +
    '\n\t- Paper COVERS Rock' +
    '\n\t- Rock CRUSHES Scissors');
    process.exit(1);
} else {
    console.log(JSON.stringify(output));
}