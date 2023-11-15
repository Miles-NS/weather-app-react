import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather App</h1>
        <form>
          <input type="search" placeholder="type city.." />
          <input type="submit" value="search" />
        </form>
      </header>
    </div>
  );
}

export default App;
