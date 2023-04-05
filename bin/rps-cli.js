#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});

import { RPS, help_RPS, rules_RPS } from "../lib/rpsls.js";

if (args.h || args.help) {
    help_RPS();
    process.exit();
} else if (args.r || args.rules) {
    rules_RPS();
    process.exit();
} else {
    var playerMove = args._[0];

    if (!playerMove) {
        var result = { "player": "rock" };
        console.log(JSON.stringify(result));
        process.exit();
    }

    playerMove = playerMove.toLowerCase();

    var result = RPS(playerMove);
    
    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
        process.exit();
    }
    process.exit();
}