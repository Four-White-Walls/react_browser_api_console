import './App.css';
import Settings from './components/Settings';
import Results from './components/Results';
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
