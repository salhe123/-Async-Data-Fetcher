# Task 2: Async Data Fetcher with Retry - JavaScript

This project implements the "Async Data Fetcher with Retry" task for the Eagle Point AI assesement Test

## Technology Stack

- **JavaScript (Node.js):** For implementing and running the asynchronous function.

## Core Functionality: `asyncFetcher`

The `asyncFetcher` function is designed to fetch data from a given URL, with built-in retry capabilities.

### Features:
- Fetches data from a specified URL.
- Retries on failure up to a maximum retry count.
- Waits for a configurable delay between retries.
- Returns the fetched data on success or throws an error if all retries are exhausted.
- Uses `async/await` for modern asynchronous programming.

### `mockApiCall` Function
To simulate real-world API interactions for testing purposes, a `mockApiCall` function is included. This mock function randomly succeeds or fails, allowing for easy verification of the retry logic without needing an actual external API.

## Project Structure

- `asyncFetcher.js`: Contains the core `mockApiCall` and `asyncFetcher` implementation.
- `testAsyncFetcher.js`: A script to demonstrate and test the `asyncFetcher` with various scenarios.
- `package.json`: Node.js project configuration.

## How to Run the Tests

### Prerequisites

- Node.js (v18 or higher recommended)

### Steps

1.  **Navigate to the `frontend-app` directory:**
    ```bash
    cd frontend-app
    ```

2.  **Install Dependencies (if any were added, though none for this basic setup):**
    ```bash
    npm install
    ```

3.  **Execute the Test Script:**
    Run the `testAsyncFetcher.js` file directly using Node.js:
    ```bash
    node testAsyncFetcher.js
    ```

### Expected Output

The console output will show the progress of each fetch attempt, indicating whether the mock API call succeeded or failed, and demonstrating the retry mechanism. Due to the random nature of `mockApiCall`, you may see different outcomes on subsequent runs, showcasing immediate success, success after retries, or ultimate failure after exhausting all retries.

## Integration with React Future Step: i can set in teh future to diplay in teh ui using React or Nextjs but for now it is enough

The `asyncFetcher` function is designed to be easily integrated into a React frontend application. It can be used within React components or custom hooks to handle data fetching for various parts of the UI, providing a robust foundation for API interactions.
