const { program } = require('commander');
const fs = require("node:fs");


program
 .option('-i, --input <type>', 'input file path')
 .option('-o, --output <type>', 'output file path')
 .option('-d, --display','display output');

 program.parse();

 const options = program.opts();

 if (!options.input) {
    throw Error('Please, specify input file');
  } 
  if (!fs.existsSync(options.input)) {
    throw Error('Cannot find input file');
  } 

    const output_string = fs.readFileSync(options.input);

  
 
 
 if (options.output) {
    fs.writeFileSync(options.output, output_string);
  }

if (options.display) {
  console.log(output_string);
}
 