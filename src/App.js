
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import LitCalContainer from './containers/LitCalContainer'
import Charts from './components/Charts'
import NavBar from './components/NavBar'


function App() {

    return (
      <Router>
        <>
          <h1> Liturgical Calendar</h1>
          <NavBar/>
          <Route exact path="/" component = {LitCalContainer}/>
          <Route path="/charts" component = {Charts}/>
        </>
      </Router>
    )
  }
export default App;
