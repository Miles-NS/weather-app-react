import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather App</h1>
        <form>
          <input type="search" placeholder="type city.." />
          <input type="submit" value="search" />
          <p>
            <a href="https://github.com/Miles-NS/weather-app-react.git">
              open-source code
            </a>{" "}
            by Nosipho Miles
          </p>
        </form>
      </header>
    </div>
  );
}

export default App;
