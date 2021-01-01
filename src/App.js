import './App.css';
import { useState, useEffect } from 'react';
import DateList from './components/DateList'

function App() {

  const [dates, setDates] = useState([]);

  const fetchDates = () => {
    console.log("getting saints...")
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2021/1`

    fetch(url)
        .then(res => res.json())
        .then(data => setDates(data))
  };

  useEffect(() => {
    fetchDates();
}, []);

  // console.log(dates)

  return (
      <>
        <h1> Liturgical Calendar</h1>
        <div>
          {/* filter form goes here */}
        </div>
        <DateList dates={dates}/>
      </>


  );
}

export default App;
