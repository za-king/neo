import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";
import Sidebar from "./components/Sidebar";

import Team from "./views/Team";
import Events from "./views/Events";
import Konsultasi from "./views/Konsultasi";
import Users from "./views/Users";
import Admin from "./views/Admin";
import AddEvent from "./views/AddEvent";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <div>
            <Navbar />
            <Route path="/" component={Dashboard} exact />
            <Route path="/Team" component={Team} exact />
            <Route path="/events" component={Events} exact />
            <Route path="/addevent" component={AddEvent} exact />
            <Route path="/konsultasi" component={Konsultasi} exact />
            <Route path="/users" component={Users} exact />
            <Route path="/admin" component={Admin} exact />

          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
