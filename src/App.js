import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import ClickTests from "./components/ClickTests";

// Comment 13-15 if running on Safari. No Dev Tools there so it will crash
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window !== "undefined" &&
      (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()),
  ),
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Click Tests</header>
        <div className="dashboardContainer">
          <ClickTests />
        </div>
      </div>
    </Provider>
  );
}

export default App;
