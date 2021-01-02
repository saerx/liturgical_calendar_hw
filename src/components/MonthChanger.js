import {useState} from 'react';

const MonthChanger = () => {

    const [month, setMonth] = useState("2021-01");

    const handleMonthChange = (event) => {
        setMonth(event.target.value)
        console.log(month.getMonth());

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