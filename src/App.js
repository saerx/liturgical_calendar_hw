
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import LitCalContainer from './containers/LitCalContainer'
import BiblePage from './components/BiblePage'
import NavBar from './components/NavBar'


function App() {

    return (
      <Router>
        <>
          <h1> Liturgical Calendar</h1>
          <NavBar/>
          <br/>
          <Route exact path="/" component = {LitCalContainer}/>
          <Route path="/nicebible" component = {BiblePage}/>
        </>
      </Router>
    )
  }
export default App;
