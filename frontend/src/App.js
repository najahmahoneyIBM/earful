import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register"
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
