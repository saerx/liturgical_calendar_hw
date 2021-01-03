import './App.css';
import { useState, useEffect } from 'react';
import DateList from './components/DateList'
import MonthChanger from './components/MonthChanger'
import FilterChanger from './components/FilterChanger';

function App() {

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)

  const fetchDates = () => {
    console.log("getting saints...")
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${year}/${month}`

    fetch(url)
        .then(res => res.json())
        .then(data => setDates(data))
  };

  useEffect(() => {
    fetchDates();
}, [month, year]);


  const changeMonthYear = (monthYear) => {
    const monthYearObject = new Date(monthYear);
    const updatedMonth = monthYearObject.getMonth() + 1
    const updatedYear = monthYearObject.getFullYear()
    setMonth(updatedMonth);
    setYear(updatedYear);
  }

  const filterByRank = (filterRank) => {
    let filteredDates = []
    if (filterRank === "0") {
      filteredDates = dates
    } else {
      filteredDates = dates.filter(date => date.celebrations[0].rank_num.toFixed(0) == filterRank)
    }
    setDates(filteredDates)
  }

  return (
      <>
        <h1> Liturgical Calendar</h1>
        {/* Figure out router */}
        <MonthChanger handleDateChange={changeMonthYear}/>
        <FilterChanger filterByRank={filterByRank}/>
        <DateList dates={dates}/>
      </>


  );
}

export default App;
