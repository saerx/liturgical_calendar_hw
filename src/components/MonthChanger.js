import {useEffect, useState} from 'react';

const MonthChanger = () => {

    const [month, setMonth] = useState("");

    const handleMonthChange = (event) => {
        setMonth(event.target.value)
    };

    return (
        <div id="date-changer">
        <input type="month" 
               placeholder="2021-01" 
               min="2021-01"
               max="2021-12"
               value={month}
               onChange={handleMonthChange}
               />
         </div>

    )
};


export default MonthChanger;