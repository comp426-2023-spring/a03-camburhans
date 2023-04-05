#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});

import { RPSLS, help_RPSLS, rules_RPSLS } from "../lib/rpsls.js";

if (args.h || args.help) {
    help_RPSLS();
    process.exit();
} else if (args.r || args.rules) {
    rules_RPSLS();
    process.exit();
} else {
    var playerMove = args._[0];

    if (!playerMove) {
        var result = { "player": "rock" };
        console.log(JSON.stringify(result));
        process.exit();
    }

    playerMove = playerMove.toLowerCase();

    var result = RPSLS(playerMove);
    
    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
    }
    process.exit();
}