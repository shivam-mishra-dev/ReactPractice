// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Nabvar from './components/layout/Navbar';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import UserView from './components/users/UserView';
import Service from './components/pages/Service';
import UserDetails from './components/pages/UserDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nabvar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="https://skm31.github.io/ReactPractice/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/userdetails" component={UserDetails}/>
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route exact path="/users/:id" component={UserView}/>
        
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
