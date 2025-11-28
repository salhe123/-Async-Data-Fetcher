import { useState } from 'react';
import { asyncFetcher } from '../asyncFetcher'; 

const TextAnalyzer = () => {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog the fox');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    const backendUrl = 'http://localhost:8080/api/v1/analyze'; // URL for the Java backend

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(`Failed to analyze text: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Task 1: Smart Text Analyzer (Java Backend)</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter text to analyze"
        />
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze Text'}
        </button>
      </form>

      {error && <p className="error">Error: {error}</p>}

      {result && (
        <div className="result">
          <h3>Analysis Results:</h3>
          <p><strong>Word Count:</strong> {result.wordCount}</p>
          <p><strong>Average Word Length:</strong> {result.averageWordLength}</p>
          <p><strong>Longest Words:</strong> {result.longestWords.join(', ')}</p>
          <h4>Word Frequency:</h4>
          <ul>
            {Object.entries(result.wordFrequency).map(([word, count]) => (
              <li key={word}>"{word}": {count}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TextAnalyzer;
