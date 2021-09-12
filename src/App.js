import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
// import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import First from "./components/First";
import Check from "./components/Check";

function App() {
  return ( 
    <>
    <NoteState>
        <Router>
          <Navbar />
          {/* <Alert message="This is amazing React course" /> */}
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/first">
                <First />
              </Route>
              <Route exact path="/check">
                <Check/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
