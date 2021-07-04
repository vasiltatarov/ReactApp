import logo from './logo.svg';
import './App.css';

async function getData() {
  const response = await fetch('https://localhost:44318/WeatherForecast');
  const data = await response.text();
  console.log(data);
}

getData();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
