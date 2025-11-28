function mockApiCall(data) {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.6;
    setTimeout(() => {
      if (success) {
        console.log("Mock API call succeeded!");
        resolve(data);
      } else {
        console.error("Mock API call failed!");
        reject(new Error("Failed to fetch data from mock API"));
      }
    }, 500); 
  });
}

async function asyncFetcher(url, maxRetries = 3, retryDelayMs = 1000) {
  let attempts = 0;
  while (attempts <= maxRetries) {
    try {
      console.log(`Attempt ${attempts + 1} for URL: ${url}`);
      const data = await mockApiCall(`Data from ${url}`); 
      console.log(`Successfully fetched data on attempt ${attempts + 1}.`);
      return data;
    } catch (error) {
      console.error(`Attempt ${attempts + 1} failed: ${error.message}`);
      attempts++;
      if (attempts > maxRetries) {
        console.error(`Max retries (${maxRetries}) exceeded for URL: ${url}.`);
        throw error;
      }
      console.log(`Retrying in ${retryDelayMs / 1000} second(s)...`);
      await new Promise(resolve => setTimeout(resolve, retryDelayMs));
    }
  }
}

// Export the functions for testing and later integration
export { asyncFetcher, mockApiCall };
