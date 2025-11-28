const { asyncFetcher } = require("./asyncFetcher");

async function runTests() {
  console.log("\n--- Testing successful fetch ---");
  try {
    const successData = await asyncFetcher("http://example.com/data/success", 3, 1000);
    console.log("Test Success: Received data:", successData);
  } catch (error) {
    console.error("Test Failure: Unexpected error on successful fetch:", error.message);
  }

  console.log("\n--- Testing failed fetch with retries ---");
  try {
    const failedData = await asyncFetcher("http://example.com/data/fail", 2, 1000); 
    console.log("Test Success (eventual): Received data after retries:", failedData);
  } catch (error) {
    console.error("Test Failure: Expected error after retries:", error.message);
  }

  console.log("\n--- Testing immediate failure (0 retries) ---");
  try {
    const immediateFailData = await asyncFetcher("http://example.com/data/immediate-fail", 0, 1000);
    console.log("Test Success: Received data unexpectedly:", immediateFailData); 
  } catch (error) {
    console.error("Test Failure: Expected error for immediate failure:", error.message);
  }
}

runTests();
