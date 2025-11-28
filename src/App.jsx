import TextAnalyzer from './components/TextAnalyzer';
import RateLimiter from './components/RateLimiter';
import './App.css';

function App() {
  return (
    <>
      <h1>Eagle Point AI - Technical Assessment</h1>
      <TextAnalyzer />
      <RateLimiter />
    </>
  );
}

export default App;