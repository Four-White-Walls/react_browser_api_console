import './App.css';
import Settings from './components/Settings.jsx';
import Results from './components/results/Results.jsx';
import RequestState from './context/request/RequestState'

function App() {
  return (
    <RequestState>
    <div className="App">
      <Settings />
      <Results />
    </div>
    </RequestState>
  );
}

export default App;
