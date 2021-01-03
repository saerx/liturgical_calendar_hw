
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import LitCalContainer from './containers/LitCalContainer'


function App() {

    return (
      <Router>
        <>
          <Route path="/" component = {LitCalContainer}/>
        </>
      </Router>
    )
  }
export default App;
