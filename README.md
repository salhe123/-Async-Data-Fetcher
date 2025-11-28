# Eagle Point AI - Full-Stack Technical Assessment

This project is a full-stack solution for the Eagle Point AI technical assessment. It includes a React frontend application that communicates with two separate backend services: a Java service for text analysis and a Go service for rate limiting.

## Project Structure

This repository is a monorepo containing three main projects:

- **`/frontend-app`**: A React application built with Vite that serves as the user interface.
- **`/text-analyzer`**: A Java Spring Boot application for Task 1 (Smart Text Analyzer).
- **`/rate-limiter-go`**: A Go application with the Gin framework for Task 3 (Rate Limiter).

---

## Frontend Application (`/frontend-app`)

The frontend is a single-page application (SPA) built with React. It provides a user interface to interact with both the Java and Go backend services.

### Features:
- **Text Analyzer UI**: A component to input text and receive an analysis from the Java backend.
- **Rate Limiter UI**: A component to send requests to the Go backend and observe the rate-limiting in action.
- **Async Fetcher with Retry**: All backend calls from the UI are made using a custom `asyncFetcher` utility (Task 2), which automatically retries failed requests.

### How to Run the Frontend:

1.  **Navigate to the directory:**
    ```bash
    cd frontend-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
The application will be available at `http://localhost:5173`.

---

## Backend Services

Before using the frontend application, ensure both backend services are running.

### 1. Text Analyzer (Java)

- **Source Directory:** `/text-analyzer`
- **Task:** Task 1 - Smart Text Analyzer
- **URL:** `http://localhost:8080`

**How to Run:**
1.  Navigate to the directory: `cd text-analyzer`
2.  Run the application: `./mvnw spring-boot:run`

### 2. Rate Limiter (Go)

- **Source Directory:** `/rate-limiter-go`
- **Task:** Task 3 - Rate Limiter
- **URL:** `http://localhost:8081`

**How to Run:**
1.  Navigate to the directory: `cd rate-limiter-go`
2.  Run the application: `go run main.go`

---

## How to Use the Full Application

1.  **Start the Java Backend:** Follow the steps above to run the Text Analyzer.
2.  **Start the Go Backend:** Follow the steps above to run the Rate Limiter.
3.  **Start the React Frontend:** Follow the steps above to run the frontend application.
4.  **Open your browser** to `http://localhost:5173` to view and interact with the application.
