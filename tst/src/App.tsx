import "./App.css";
import pic from "./assets/react.svg";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";
import { CustomRouter } from "./router";
import { createBrowserHistory } from "history";

const env = process.env.NODE_ENV;

const history = createBrowserHistory();

function App() {
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route
          element={
            <div>
              <p>LOOK, HEADER HERE xD</p>
              <Outlet />
            </div>
          }
        >
          <Route
            index
            path="/"
            element={
              <div className="App">
                <h1>Don't mind me</h1>
                <h2>just testing some stuff.</h2>
                <p>main page</p>
                <img src={pic} />
                <Link to="/fir-st">1</Link>
                <Link to="/sec-ond">2</Link>
                <Link to="/thi-rd">3</Link>
              </div>
            }
          />
          <Route
            path="/fir-st"
            element={
              <div className="App">
                <h2>just testing some stuff.</h2>
                <p>first page</p>
              </div>
            }
          />
          <Route
            path="/sec-ond"
            element={
              <div className="App">
                <h2>just testing some stuff.</h2>
                <p>second page</p>
                {env}
              </div>
            }
          />
          <Route
            path="/thi-rd"
            element={
              <div className="App">
                <h2>just testing some stuff.</h2>
                <p>third</p>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="App">
                <h2>UNLUCKY</h2>
                <h3>refresh</h3>
                {env}
              </div>
            }
          />
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
