
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import LitCalContainer from './containers/LitCalContainer'
import BiblePage from './components/BiblePage'
import ChartPage from './components/ChartPage'
import NavBar from './components/NavBar'



function App() {
  // Tried to refactor app to be able to pass state down to both LitCalContainer and ChartPage but was unsuccessful 
    return (
      <Router>
        <>
          <h1> Liturgical Calendar</h1>
          <NavBar/>
            <br/>
            <Route exact path="/"
                   render={()=><LitCalContainer/>}/>
            <Route path="/nicebible" component = {BiblePage}/>
            <Route path="/charts" 
                   render={()=><ChartPage/>} />
        </>
      </Router>
    )
  }
export default App;
