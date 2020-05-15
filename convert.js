const csvToJson = require("convert-csv-to-json");

const input = "./src/data/PFG 2019 Purchase Detail.csv";
const output = "./src/data/PFG_2019.json";
const inputTwo = "./src/data/US_Foods_19.csv";
const outputTwo = "./src/data/US_Foods_2019.json";

csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .generateJsonFileFromCsv(input, output);

  csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .generateJsonFileFromCsv(inputTwo, outputTwo);
