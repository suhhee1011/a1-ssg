#!/usr/bin/env bash
":" //# comment; exec /usr/bin/env node --input-type=module - "$@" < "$0"

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


function main() {
    const { argv } = yargs(hideBin(process.argv))
        .option('i', {
            alias: 'input',
            describe: 'Provide filename to covert html',
            type: 'string',
            required: true
        })
        .alias('v', 'version')
        .version('v', '0.0.1')
        .alias('h', 'help')
        .help('h', 'Display help');

}

main();