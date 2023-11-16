import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a href="https://github.com/Miles-NS/weather-app-react.git">
          open-source code
        </a>{" "}
        by Nosipho Miles
      </footer>
    </div>
  );
}

export default App;
