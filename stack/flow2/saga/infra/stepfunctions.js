/* eslint-disable no-console */
// This is a utility JS module works alongside with stepfunctions.yml & saga.json
// It acts as a pre-processor for Serverless, wherein it parses saga.json and converts it into single-line JSON before passing it to CloudFormation.
// More at: https://www.serverless.com/framework/docs/providers/aws/guide/variables/#reference-variables-in-javascript-files

const fs = require("fs");

module.exports.definitionString = (serverless) => {
  const stage = serverless.options.stage;
  let fc = fs.readFileSync("flow2/saga/saga.json", "utf8");
  switch (stage) {
    case "dev":
      // stage-specific custom code goes here
      break;
    case "prod":
      // stage-specific custom code goes here
      break;
    default:
      console.log(
        "*** Parameter missing 'STAGE'. Use --stage <dev|prod> while invoking Serverless. ***"
      );
      return false;
  }
  fc = fc.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, "");
  return fc;
};
