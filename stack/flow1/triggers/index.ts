import { StepFunctions } from "aws-sdk";
const stepfunctions = new StepFunctions();

export const handler = async (event: any, context: any) => {
  console.log("--- Invoking step function");
  try {
    await stepfunctions
      .startExecution({
        stateMachineArn: process.env.STATE_MACHINE_ARN,
        input: event.Records[0].body,
      })
      .promise();
    console.log("--- Invoked step function successfully");
  } catch (e) {
    console.error(e);
  }
};
