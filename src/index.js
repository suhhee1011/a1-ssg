#!/usr/bin/env bash
//# comment; exec /usr/bin/env node --input-type=module - "$@" < "$0"

let yargs = require('yargs/yargs');
let {hideBin} = require('yargs/helpers');
let fs = require('fs');

const getHTML = (title, contents) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
${contents}
</body>
</html>
`

async function main() {
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

    const { input } = argv; // const input = argv.input; 
    console.log(input);

    let files = [];
    if (fs.lstatSync(input).isDirectory()) {
        const filesFromDir = await fs.promises.readdir(input, 'utf-8');
        files = filesFromDir.map(e => `${input}/${e}`);
    } else {
        files.push(input);
    }
    console.log(files);

    for (const file of files) {

        const res = await fs.promises.readFile(file, 'utf-8');
        fileType = argv.input.split('.').pop();
        let resArr = res.split('\n\n');
        resArr = resArr.map(e => `<p>${e}</p>\n`);
        // console.log(resArr);
        const fileNameExt = file.split('/')[file.split('/').length - 1];
        const filename = fileNameExt.split('.')[0];
        if (!fs.existsSync('dist')) {
            fs.mkdirSync('dist');
        }
        await fs.promises.writeFile(`dist/${filename}.html`, getHTML(filename, resArr.join("")));
    }

}

main();
