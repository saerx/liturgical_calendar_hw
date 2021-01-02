import './App.css';
import { useState, useEffect } from 'react';
import DateList from './components/DateList'
import MonthChanger from './components/MonthChanger'

function App() {

  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState("1")
  const [year, setYear] = useState("2021")

  const fetchDates = () => {
    console.log("getting saints...")
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${year}/${month}`

    fetch(url)
        .then(res => res.json())
        .then(data => setDates(data))
  };

  useEffect(() => {
    fetchDates();
});


  const changeMonthYear = (monthYear) => {
    const monthYearObject = new Date(monthYear);
    const updatedMonth = monthYearObject.getMonth() + 1
    const updatedYear = monthYearObject.getFullYear()
    setMonth(updatedMonth);
    setYear(updatedYear);
  }

  return (
      <>
        <h1> Liturgical Calendar</h1>
        {/* Figure out router */}
        <MonthChanger handleDateChange={changeMonthYear}/>
        <DateList dates={dates}/>
      </>


  );
}

export default App;
