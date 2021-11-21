import { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {
  console.log("--- Invoking core systems..");
  if (Math.round(Math.random()) == 0) {
    return { result: "OK" };
  } else {
    throw new Error("Induced Error");
  }
};
