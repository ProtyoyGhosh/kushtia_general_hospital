import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Error from '../src/Error/Error';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/appoinment'>
            <Appoinment></Appoinment>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
