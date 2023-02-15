import "./App.css";
import pic from "./assets/react.svg";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";

const env = process.env.NODE_ENV;

function App() {
  return (
    <BrowserRouter>
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
            path=""
            element={
              <div className="App">
                <h1>Don't mind me</h1>
                <h2>just testing some stuff.</h2>
                <p>main page</p>
                <img src={pic} />
                <Link to="/first">1</Link>
                <Link to="/second">2</Link>
                <Link to="/third">3</Link>
              </div>
            }
          />
          <Route
            path="first"
            element={
              <div className="App">
                <h2>just testing some stuff.</h2>
                <p>first page</p>
              </div>
            }
          />
          <Route
            path="second"
            element={
              <div className="App">
                <h2>just testing some stuff.</h2>
                <p>second page</p>
                {env}
              </div>
            }
          />
          <Route
            path="third"
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
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
