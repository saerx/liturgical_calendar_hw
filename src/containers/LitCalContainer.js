
import { useState, useEffect } from 'react';

import DateList from '../components/DateList'
import MonthChanger from '../components/MonthChanger'
import FilterChanger from '../components/FilterChanger';
import ChartPage from '../components/ChartPage'


function LitCalContainer() {

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  const [parentFilterRank, setParentFilterRank] = useState("0")
  const [filteredDates, setFilteredDates] = useState([])

  const [yeezy, setYeezy] = useState("")

  // Uses Liturgical Calendar API by Jakub Pavlík http://calapi.inadiutorium.cz/about
  const fetchDates = () => {
    console.log("getting saints...")
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${year}/${month}`

    fetch(url)
        .then(res => res.json())
        .then(data => setDates(data))
  };


// Uses kanye.rest api made by Andrew Jazbec https://kanye.rest/

// I know I should be using promise all but I don't understand how.

  const fetchKanye = () => {
    console.log("getting Yeezy...")
    fetch(`https://api.kanye.rest`)
      .then(res => res.json())
      .then(data => setYeezy(data))
  };

  useEffect(() => {
    fetchDates();
    fetchKanye();
}, [month, year]);




// useEffect(() => {
//   fetchKanye();
// }, [dates])


  // Provides a function to take user's change of month and make a new call to the API
  const changeMonthYear = (monthYear) => {
    const monthYearObject = new Date(monthYear);
    const updatedMonth = monthYearObject.getMonth() + 1
    const updatedYear = monthYearObject.getFullYear()
    setMonth(updatedMonth);
    setYear(updatedYear);
  }


  // Provides a function to take user's change of filter and make alter a state property in the parent component, triggering a useEffect
  const filterByRank = (filterRank) => {
    setParentFilterRank(filterRank)
  }

  // Uses secondary effects to make alterations to the filteredDates state whenever the user's choice of month or rank filter changes
  useEffect(() => {
    let newFilteredDates = []
    if (parentFilterRank === "0") {
      newFilteredDates = dates;
    } else {
      // Filters all dates where "some" feast in the celebration array has a rank equal to the parentFilterRank
      newFilteredDates = dates.filter((date) => {
        return date.celebrations.some((celebration) => {
          // Removes numbers after decimal in "rank_num" and sets loose equals to parentFilterRank which is a string
          return Math.trunc(celebration.rank_num) == parentFilterRank
        })
      })
    }
    setFilteredDates(newFilteredDates)
  }, [parentFilterRank, dates])


  return (
      <>
        <p>{yeezy["quote"]} — Pope Francis</p>
        <br/>
        {/* Figure out router */}
        <MonthChanger handleDateChange={changeMonthYear}/>
        <br/>
        <FilterChanger filterByRank={filterByRank}/>
        <DateList dates={filteredDates}/>
        <ChartPage dates={filteredDates}/>

      </>


  );
}

export default LitCalContainer;
