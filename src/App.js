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
  const [parentFilterRank, setParentFilterRank] = useState("0")
  const [filteredDates, setFilteredDates] = useState([])

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
    setParentFilterRank(filterRank)
  }

  useEffect(() => {
    let newFilteredDates = []
    if (parentFilterRank === "0") {
      newFilteredDates = dates;
    } else {
      newFilteredDates = dates.filter(date => Math.trunc(date.celebrations[0].rank_num) == parentFilterRank)
    }
    setFilteredDates(newFilteredDates)
  }, [parentFilterRank, dates])

  return (
      <>
        <h1> Liturgical Calendar</h1>
        {/* Figure out router */}
        <MonthChanger handleDateChange={changeMonthYear}/>
        <FilterChanger filterByRank={filterByRank}/>
        <DateList dates={filteredDates}/>
      </>


  );
}

export default App;
