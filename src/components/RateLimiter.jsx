import { useState } from 'react';
import { asyncFetcher } from '../asyncFetcher'; 

const RateLimiter = () => {
  const [userId, setUserId] = useState('user123');
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);
    const backendUrl = 'http://localhost:8081/api/resource'; 
    const startTime = new Date();

    const fetchData = async () => {
      const response = await fetch(backendUrl, {
        headers: {
          'X-User-ID': userId,
        },
      });
      
      const data = await response.json();
      
      const newResponse = {
        time: startTime.toLocaleTimeString(),
        status: response.status,
        body: JSON.stringify(data),
        success: response.ok,
      };

      if (!response.ok) {
        throw new Error(`Status ${response.status}`); 
      }
      
      return newResponse;
    };

    try {
      const result = await asyncFetcher(fetchData, 2, 500); 
      setResponses(prev => [result, ...prev]);
    } catch (err) {
      const newResponse = {
        time: startTime.toLocaleTimeString(),
        status: 'Network Error / Retries Failed',
        body: err.message,
        success: false,
      };
      setResponses(prev => [newResponse, ...prev]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Task 3: Rate Limiter Tester (Go Backend)</h2>
      <p><i>(Uses asyncFetcher for retries on API calls. It will retry twice on failure.)</i></p>
      <div>
        <label htmlFor="userId">User ID: </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <button onClick={handleRequest} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Request to /api/resource'}
      </button>

      <div className="responses">
        <h3>Responses:</h3>
        <ul>
          {responses.map((res, index) => (
            <li key={index} className={res.success ? 'success' : 'error'}>
              <strong>[{res.time}]</strong> - Status: {res.status} - Body: {res.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RateLimiter;
