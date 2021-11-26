import "./App.css";
import Horoscope from "./components/Horoscope";
import Weather from "./components/Weather";


function App() {
  return (
    <div className="App">
      <header className="App-header">React-Redux Playground</header>
      <div className="dashboardContainer">
      <Horoscope />
      <Weather />

      </div>
    </div>
  );
}

export default App;
